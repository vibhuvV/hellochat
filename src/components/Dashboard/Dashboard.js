import React, { Component, Fragment } from "react";
import ChatList from "../ChatList/ChatList";
import SignOut from "../SignOut/SignOut";
import ChatView from "../ChatView/ChatView";
import ChatTextBox from "../ChatTextBox/ChatTextBox";
import NewChat from "../NewChat/NewChat";
import firebase from "firebase";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      selectedChat: null,
      newChatFormVisible: false,
      email: null,
      chats: []
    };
  }

  render() {
    return (
      <Fragment>
        <ChatList
          history={this.props.history}
          newChatBtnFn={this.newChatBtnClicked}
          selectChatFn={this.selectChat}
          chats={this.state.chats}
          userEmail={this.state.email}
          selectedChatIndex={this.state.selectedChat}
        />
        {this.state.newChatFormVisible ? null : (
          <ChatView
            user={this.state.email}
            chat={this.state.chats[this.state.selectedChat]}
          />
        )}
        {this.state.selectedChat !== null && !this.state.newChatFormVisible ? (
          <ChatTextBox
            messageReadFn={this.messageRead}
            submitMessageFn={this.submitMessage}
          />
        ) : null}
        {this.state.newChatFormVisible ? (
          <NewChat
            goToChatFn={this.goToChat}
            newChatSubmitFn={this.newChatSubmit}
          ></NewChat>
        ) : null}
        <SignOut signOut={this.signOut} />
      </Fragment>
    );
  }

  submitMessage = msg => {
    const docKey = this.buildDocKey(
      this.state.chats[this.state.selectedChat].users.filter(
        usr => usr !== this.state.email
      )[0]
    );
    firebase
      .firestore()
      .collection("chats")
      .doc(docKey)
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion({
          sender: this.state.email,
          message: msg,
          timestamp: Date.now()
        }),
        recieverHasRead: false
      });
  };

  buildDocKey = friend => [this.state.email, friend].sort().join(":");

  signOut = () => {
    firebase.auth().signOut();
  };

  selectChat = async chatIndex => {
    await this.setState({ selectedChat: chatIndex });
    this.messageRead();
  };

  messageRead = () => {
    const docKey = this.buildDocKey(
      this.state.chats[this.state.selectedChat].users.filter(
        usr => usr !== this.state.email
      )[0]
    );
    if (this.recieverClickedMessage(this.state.selectedChat)) {
      firebase
        .firestore()
        .collection("chats")
        .doc(docKey)
        .update({ recieverHasRead: true });
    } else {
      console.log("Clicked by the sender");
    }
  };

  recieverClickedMessage = chatIndex =>
    this.state.chats[chatIndex].messages[
      this.state.chats[chatIndex].messages.length - 1
    ].sender !== this.state.email;

  newChatBtnClicked = () =>
    this.setState({ newChatFormVisible: true, selectedChat: null });

  goToChat = async (docKey, message) => {
    const usersInChat = docKey.split(":");
    const chat = this.state.chats.find(chat =>
      usersInChat.every(user => chat.users.includes(user))
    );
    this.setState({ newChatFormVisible: false });
    await this.selectChat(this.state.chats.indexOf(chat));
    this.submitMessage(message);
  };

  newChatSubmit = async chatObj => {
    const docKey = this.buildDocKey(chatObj.sendTo);
    await firebase
      .firestore()
      .collection("chats")
      .doc(docKey)
      .set({
        recieverHasRead: false,
        users: [this.state.email, chatObj.sendTo],
        messages: [
          {
            message: chatObj.message,
            sender: this.state.email
          }
        ]
      });
    this.setState({ newChatFormVisible: false });
    this.selectChat(this.state.chats.length - 1);
  };

  componentWillMount() {
    firebase.auth().onAuthStateChanged(async usr => {
      if (!usr) this.props.history.push("/Login");
      else {
        await firebase
          .firestore()
          .collection("chats")
          .where("users", "array-contains", usr.email)
          .onSnapshot(async res => {
            const chats = res.docs.map(doc => doc.data());
            await this.setState({
              email: usr.email,
              chats: chats
            });
            console.log(this.state);
          });
      }
    });
  }
}
