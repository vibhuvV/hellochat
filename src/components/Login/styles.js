const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(30),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(10)
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
  },
  form: {
    width: "100%",
    marginTop: theme.spacing()
  },
  submit: {
    marginTop: theme.spacing(3)
  },
  hasAccountHeader: {
    marginTop: "10px",
    width: "100%"
  },
  logInLink: {
    width: "100%",
    textDecoration: "none",
    color: "#303f9f",
    fontWeight: "bolder"
  },
  errorText: {
    marginTop: "10px",
    color: "red",
    textAlign: "center"
  }
});

export default styles;
