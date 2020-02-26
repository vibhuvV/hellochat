const styles = theme => ({
  sendBtn: {
    color: "blue",
    cursor: "pointer",
    "&:hover": {
      color: "gray"
    }
  },

  chatTextBoxContainer: {
    position: "absolute",
    bottom: "15px",
    left: "325px",
    boxSizing: "border-box",
    overflow: "auto",
    width: "calc(100% - 310px - 60px)"
  },

  chatTextBox: {
    width: "calc(100% - 25px)"
  }
});

export default styles;
