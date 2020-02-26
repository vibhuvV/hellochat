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

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      passwordConfirmation: null,
      signupError: ""
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
              Sign Up!
            </Typography>
            <form onSubmit={e => this.submitSignUp(e)} className={classes.form}>
              <FormControl required fullWidth margin="normal">
                <InputLabel htmlFor="signup-email-input">
                  Enter Your Email
                </InputLabel>
                <Input
                  autoComplete="email"
                  autoFocus
                  onChange={e => this.userTyping("email", e)}
                  id="signup-email-input"
                />
              </FormControl>
              <FormControl required fullWidth margin="normal">
                <InputLabel htmlFor="signup-password-input">
                  Create A Password
                </InputLabel>
                <Input
                  type="password"
                  onChange={e => this.userTyping("password", e)}
                  id="signup-password-input"
                />
              </FormControl>
              <FormControl required fullWidth margin="normal">
                <InputLabel htmlFor="signup-password-confirmation-input">
                  Confirm Your Password
                </InputLabel>
                <Input
                  type="password"
                  onChange={e => this.userTyping("passwordConfirmation", e)}
                  id="signup-password-confirmation-input"
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Submit
              </Button>
            </form>
            {this.state.signupError ? (
              <Typography
                className={classes.errorText}
                component="h2"
                variant="caption"
              >
                {this.state.signupError}
              </Typography>
            ) : null}
            <Typography
              component="h3"
              variant="subtitle1"
              className={classes.hasAccountHeader}
            >
              Already Have An Account?{" "}
            </Typography>
            <Link className={classes.logInLink} to="/login">
              Login
            </Link>
          </Paper>
        </main>
      </Fragment>
    );
  }

  formIsValid = () => this.state.password === this.state.passwordConfirmation;

  userTyping = (type, e) => {
    switch (type) {
      case "email":
        this.setState({ email: e.target.value });
        break;

      case "password":
        this.setState({ password: e.target.value });
        break;

      case "passwordConfirmation":
        this.setState({ passwordConfirmation: e.target.value });
        break;

      default:
        break;
    }
  };

  submitSignUp = e => {
    e.preventDefault();

    if (!this.formIsValid()) {
      this.setState({ signupError: "Passwords do not match!!" });
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        authRes => {
          const userObj = {
            email: authRes.user.email
          };
          firebase
            .firestore()
            .collection("users")
            .doc(this.state.email)
            .set(userObj)
            .then(
              () => {
                this.props.history.push("/Dashboard");
              },
              dbErr => {
                console.log(dbErr);
                this.setState({ signupErr: dbErr.message });
              }
            );
        },
        authErr => {
          console.log(authErr);
          this.setState({ signupError: authErr.message });
        }
      );
  };
}

export default withStyles(styles)(SignUp);
