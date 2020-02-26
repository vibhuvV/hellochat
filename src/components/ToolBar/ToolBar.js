import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

const ToolBar = ({ classes, user, chat }) => (
  <div className={classes.chatHeader}>
    Your conversation with{" "}
    <span style={{ fontWeight: "800" }}>
      {chat.users.filter(usr => usr !== user)[0]}
    </span>
  </div>
);

export default withStyles(styles)(ToolBar);
