const styles = theme => ({
  content: {
    height: "calc(100vh - 100px)",
    overflow: "auto",
    padding: "25px",
    marginLeft: "310px",
    boxSizing: "border-box",
    overflowY: "scroll",
    top: "50px",
    width: "calc(100% - 310px)",
    position: "absolute"
  },

  friendSent: {
    float: "left",
    clear: "both",
    padding: "20px",
    boxSizing: "border-box",
    wordWrap: "break-word",
    marginTop: "10px",
    backgroundColor: "#707BC4",
    color: "white",
    width: "300px",
    borderRadius: "10px"
  },

  userSent: {
    float: "right",
    clear: "both",
    padding: "20px",
    boxSizing: "border-box",
    wordWrap: "break-word",
    marginTop: "10px",
    backgroundColor: "#999",
    color: "white",
    width: "300px",
    borderRadius: "10px"
  }
});

export default styles;
