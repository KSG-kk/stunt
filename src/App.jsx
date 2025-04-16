import React, { Component } from "react";
import Feature from "./component/Feature";
import List from "./component/List";
import Message from "./component/Message";
import Editor from "./component/Eitor";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="big-box">
        <Feature />
        <List />

        <Message />
        <Editor />
      </div>
    );
  }
}
