import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import NavBar from "../InitPage/NavBar/NavBar";
import styles from "./styles";
import firebase from "firebase";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      loginErr: ""
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <NavBar />
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5">
              Log In!
            </Typography>
            <form onSubmit={e => this.submitLogIn(e)} className={classes.form}>
              <FormControl required fullWidth margin="normal">
                <InputLabel htmlFor="login-email-input">
                  Enter Your Email
                </InputLabel>
                <Input
                  autoComplete="email"
                  autoFocus
                  onChange={e => this.userTyping("email", e)}
                  id="login-email-input"
                />
              </FormControl>
              <FormControl required fullWidth margin="normal">
                <InputLabel htmlFor="login-password-input">
                  Enter Your Password
                </InputLabel>
                <Input
                  type="password"
                  onChange={e => this.userTyping("password", e)}
                  id="login-password-input"
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Log In
              </Button>
            </form>
            {this.state.loginErr ? (
              <Typography
                className={classes.errorText}
                component="h2"
                variant="caption"
              >
                {this.state.loginErr}
              </Typography>
            ) : null}
            <Typography
              component="h3"
              variant="subtitle1"
              className={classes.hasAccountHeader}
            >
              Don't Have An Account?{" "}
            </Typography>
            <Link className={classes.logInLink} to="/SignUp">
              SignUp
            </Link>
          </Paper>
        </main>
      </Fragment>
    );
  }

  userTyping = (type, e) => {
    switch (type) {
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "password":
        this.setState({ password: e.target.value });
        break;
      default:
        break;
    }
  };

  submitLogIn = e => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        authRes => {
          this.props.history.push("/Dashboard");
        },
        err => {
          const msg =
            err.message ===
            "There is no user record corresponding to this identifier. The user may have been deleted."
              ? "User Not Found"
              : err.message;
          this.setState({ loginErr: msg });
          console.log(err);
        }
      );
  };
}

export default withStyles(styles)(Login);
