import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import ToolBar from "../ToolBar/ToolBar";

class ChatView extends Component {
  componentDidUpdate() {
    const container = document.getElementById("chatview-container");
    if (container) container.scrollTo(0, container.scrollHeight);
  }

  render() {
    const { classes, chat, user } = this.props;

    if (chat === undefined) {
      return (
        <main
          id="chatview-container"
          style={{ textAlign: "center", color: "blue", fontSize: "3rem" }}
          className={classes.content}
        >
          Select A Chat To Display
        </main>
      );
    } else {
      return (
        <Fragment>
          <ToolBar user={user} chat={chat} />
          <main id="chatview-container" className={classes.content}>
            {chat.messages.map((msg, index) => {
              return (
                <div
                  className={
                    msg.sender === user ? classes.userSent : classes.friendSent
                  }
                  key={index}
                >
                  {msg.message}
                </div>
              );
            })}
          </main>
        </Fragment>
      );
    }
  }
}

export default withStyles(styles)(ChatView);
