
import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  render() {
    return (
      <div className="vertical-area">
        <div className="top-widget">
          <input type="text" className="search-input" placeholder="搜索" />
          <div className="action-box">+</div>
        </div>

        <div className="chat-list-item">
          <div className="chat-item-avatar"></div>
          <div className="chat-item-content">
            <div className="chat-item-name">我的电脑</div>
            <div className="chat-item-message">阿巴阿巴阿巴</div>
          </div>
          <div className="chat-item-time">15:14</div>
        </div>
      </div>
    );
  }
}
