import React, { Component } from "react";
import "./index.css";

export default class Editor extends Component {
  render() {
    return (
      <div className="lower-part">
        <div className="input-tools">
          <div className="tool-item emoji"></div>
          <div className="tool-item file"></div>
          <div className="tool-item cut"></div>
          <div className="tool-item chat-record"></div>
          <div className="tool-item voice-call"></div>
          <div className="tool-item video-call"></div>
        </div>

        <textarea className="input-box" placeholder="输入内容"></textarea>
      </div>
    );
  }
}
