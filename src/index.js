import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";
import App from "./App";

firebase.initializeApp({
  apiKey: "AIzaSyBPvY0jGPR0b3phdIUIsZQyum4HUMG5NQU",
  authDomain: "hellochat-5f281.firebaseapp.com",
  databaseURL: "https://hellochat-5f281.firebaseio.com",
  projectId: "hellochat-5f281",
  storageBucket: "hellochat-5f281.appspot.com",
  messagingSenderId: "214513376191",
  appId: "1:214513376191:web:62d2e809ff1e7506749f0a",
  measurementId: "G-Q6H7MSC87S"
});

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
