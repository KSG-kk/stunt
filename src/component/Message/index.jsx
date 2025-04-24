import React, { Component } from "react";
import "./index.css";

export default function Message() {
    return (
      <div className="upper-part">
        <div className="contact-name-component">
          <div className="contact-label">联系人</div>
        </div>

        <div className="chat-message">
          <div className="message-time">15:40</div>
          <div className="message-body">
            <div className="other-message">
              <div className="other-avatar"></div>
              <div className="other-content">购购购~</div>
            </div>
          </div>
        </div>

        <div className="chat-message">
          <div className="message-time">15:41</div>
          <div className="message-body">
            <div className="my-message">
              <div className="my-content">出发咯</div>
              <div className="my-avatar"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
