import React, { useRef } from "react";
import "./index.css";

export default function Editor({ value, setValue, sendMessage }) {
  const composing = useRef(false);

  const handleComposition = (e) => {
    if (e.type === "compositionstart") composing.current = true;
    if (e.type === "compositionend") composing.current = false;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && !composing.current) {
      e.preventDefault();
      sendMessage();
    }
  };
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
      <textarea
        className="input-box"
        placeholder="输入内容"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onCompositionStart={handleComposition}
        onCompositionEnd={handleComposition}
      />
      <button
        className="send-btn"
        onClick={sendMessage}
        style={{ margin: 8, alignSelf: "flex-end" }}
      >
        发送
      </button>
    </div>
  );
}
