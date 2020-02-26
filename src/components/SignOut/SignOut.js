import React from "react";
import { Button, withStyles } from "@material-ui/core";
import styles from "./styles";

const SignOut = ({ signOut, classes }) => {
  return (
    <Button
      variant="contained"
      fullWidth
      onClick={signOut}
      color="primary"
      className={classes.signOutBtn}
    >
      Sign Out
    </Button>
  );
};

export default withStyles(styles)(SignOut);
