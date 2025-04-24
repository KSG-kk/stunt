import React from "react";
import "./index.css";

export default function List() {
  // 直接定义会话数组数据（无需类型注释）
  const sessions = [
    {
      name: "我的电脑",
      message: "阿巴阿巴阿巴",
      time: "15:14",
    },
    {
      name: "文件传输助手",
      message: "已收到文件",
      time: "16:05",
    },
    {
      name: "小明",
      message: "今晚一起吃饭？",
      time: "18:30",
    },
  ];

  return (
    <div className="vertical-area">
      <div className="top-widget">
        <input type="text" className="search-input" placeholder="搜索" />
        <div className="action-box">+</div>
      </div>

      {sessions.map((session, index) => (
        <div key={index} className="chat-list-item">
          <div className="chat-item-avatar"></div>
          <div className="chat-item-content">
            <div className="chat-item-name">{session.name}</div>
            <div className="chat-item-message">{session.message}</div>
          </div>
          <div className="chat-item-time">{session.time}</div>
        </div>
      ))}
    </div>
  );
}
