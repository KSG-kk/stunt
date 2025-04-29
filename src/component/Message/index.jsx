import React, { useRef, useEffect } from "react";
import "./index.css";

function formatTime(ts) {
  const date = new Date(ts);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function Message({ messages, users, session }) {
  const scrollRef = useRef(null);
  if (!session) return null;
  const isGroup = session.type === "group";
  let lastTime = 0;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, session.id]);

  return (
    <div className="upper-part">
      <div className="contact-name-component">
        <div className="contact-label">{session.name}</div>
      </div>
      <div className="message-scroll-area" ref={scrollRef}>
        {messages.map((msg, idx) => {
          const user = users.find((u) => u.id === msg.userId) || {};
          let showTime = false;
          if (idx === 0 || msg.time - lastTime > 5 * 60 * 1000) {
            showTime = true;
          }
          lastTime = msg.time;
          const isMe = user.nickname === "我";
          return (
            <div className="chat-message" key={msg.id}>
              {showTime && (
                <div className="message-time">{formatTime(msg.time)}</div>
              )}
              <div className="message-body">
                {isMe ? (
                  <div className="my-message">
                    <div className="my-content">{msg.content}</div>
                    <div className="my-avatar"></div>
                  </div>
                ) : (
                  <div className="other-message">
                    <div className="other-avatar"></div>
                    <div>
                      {isGroup && (
                        <div style={{ fontSize: 12, color: "#8bc34a" }}>
                          {user.nickname}
                        </div>
                      )}
                      <div className="other-content">{msg.content}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
