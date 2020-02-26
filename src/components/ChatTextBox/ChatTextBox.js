import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Send from "@material-ui/icons/Send";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class ChatTextBox extends Component {
  constructor() {
    super();
    this.state = {
      chatText: ""
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.chatTextBoxContainer}>
        <TextField
          id="chatTextBox"
          className={classes.chatTextBox}
          placeholder="Type your message......"
          onKeyUp={e => this.userTyping(e)}
          onFocus={this.userClickedInput}
        ></TextField>
        <Send onClick={this.submitMessage} className={classes.sendBtn}></Send>
      </div>
    );
  }

  userTyping = e => {
    e.keyCode === 13
      ? this.submitMessage()
      : this.setState({ chatText: e.target.value });
  };

  messageValid = text => text && text.replace(/\s/g, "").length;

  userClickedInput = () => {
    this.props.messageReadFn();
  };

  submitMessage = () => {
    if (this.messageValid(this.state.chatText)) {
      // call parent function
      this.props.submitMessageFn(this.state.chatText);
      document.getElementById("chatTextBox").value = "";
    }
  };
}

export default withStyles(styles)(ChatTextBox);
