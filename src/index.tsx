import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD3tOVqJzbrykr68ciGLpPZusVmPHE2xw0",
  authDomain: "chemifun-66fe8.firebaseapp.com",
  databaseURL: "https://chemifun-66fe8.firebaseio.com",
  projectId: "chemifun-66fe8",
  storageBucket: "chemifun-66fe8.appspot.com",
  messagingSenderId: "143919091051",
  appId: "1:143919091051:web:658d9e4c1dead4cd7e902e",
  measurementId: "G-N3VMTBMSV0",
};

if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
