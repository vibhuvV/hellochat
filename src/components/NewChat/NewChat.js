import React, { Component } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Paper,
  withStyles,
  CssBaseline,
  Typography
} from "@material-ui/core";
import styles from "./styles";
import firebase from "firebase";

class NewChat extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      message: null
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <CssBaseline></CssBaseline>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Send A Message
          </Typography>
          <form className={classes.form} onSubmit={e => this.submitNewChat(e)}>
            <FormControl fullWidth>
              <InputLabel htmlFor="new-chat-username">
                Enter Your Friend's Email
              </InputLabel>
              <Input
                required
                className={classes.input}
                autoFocus
                onChange={e => this.userTyping("username", e)}
                id="new-chat-username"
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="new-chat-message">
                Enter Your Message
              </InputLabel>
              <Input
                required
                className={classes.input}
                onChange={e => this.userTyping("message", e)}
                id="new-chat-message"
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              className={classes.submit}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </form>
          {this.state.serverError ? (
            <Typography
              component="h3"
              variant="subtitle1"
              className={classes.errorText}
            >
              Unable to locate the user
            </Typography>
          ) : null}
        </Paper>
      </main>
    );
  }

  componentWillMount() {
    if (!firebase.auth().currentUser) this.props.history.push("/login");
  }

  userTyping = (type, e) => {
    switch (type) {
      case "username":
        this.setState({ username: e.target.value });
        break;

      case "message":
        this.setState({ message: e.target.value });
        break;

      default:
        break;
    }
  };

  submitNewChat = async e => {
    e.preventDefault();
    const userExists = await this.userExists();
    if (userExists) {
      console.log(this.state);
      const chatExists = await this.chatExists();
      chatExists ? this.goToChat() : this.createChat();
    }
  };

  createChat = () => {
    console.log("createChat");
    this.props.newChatSubmitFn({
      sendTo: this.state.username,
      message: this.state.message
    });
  };

  goToChat = () =>
    this.props.goToChatFn(this.buildDocKey(), this.state.message);

  buildDocKey = () => {
    console.log("dockey");
    return [firebase.auth().currentUser.email, this.state.username]
      .sort()
      .join(":");
  };

  chatExists = async () => {
    console.log("chatexists");
    const docKey = this.buildDocKey();
    const chat = await firebase
      .firestore()
      .collection("chats")
      .doc(docKey)
      .get();
    console.log(chat);
    return chat.exists;
  };

  userExists = async () => {
    console.log("userExists");
    const usersSnapshot = await firebase
      .firestore()
      .collection("users")
      .get();
    const exists = usersSnapshot.docs
      .map(doc => doc.data().email)
      .includes(this.state.username);
    this.setState({ serverError: !exists });
    return exists;
  };
}

export default withStyles(styles)(NewChat);
