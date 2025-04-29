import React from "react";
import "./index.css";

export default function List({
  sessions,
  users,
  currentSessionId,
  setCurrentSessionId,
}) {
  return (
    <div className="vertical-area">
      <div className="top-widget">
        <input type="text" className="search-input" placeholder="搜索" />
        <div className="action-box">+</div>
      </div>
      {sessions.map((session) => {
        const isActive = session.id === currentSessionId;
        const isGroup = session.type === "group";
        return (
          <div
            key={session.id}
            className={`chat-list-item${isActive ? " active" : ""}`}
            onClick={() => setCurrentSessionId(session.id)}
            style={{
              cursor: "pointer",
              background: isActive ? "#222" : undefined,
            }}
          >
            <div className="chat-item-avatar">
              {/* 可放头像 */}
              {isGroup ? "群" : "私"}
            </div>
            <div className="chat-item-content">
              <div className="chat-item-name">{session.name}</div>
              <div className="chat-item-message">{session.lastMessage}</div>
            </div>
            <div className="chat-item-time">
              {new Date(session.lastTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
