import React, { useState, useCallback } from "react";
import Feature from "./component/Feature";
import List from "./component/List";
import Message from "./component/Message";
import Editor from "./component/Editor";
import "./App.css";

// 用户示例
const users = [
  {
    id: 1,
    nickname: "小明",
    avatar: "",
    wxid: "xiaoming",
    region: "北京",
    signature: "开心每一天",
  },
  {
    id: 2,
    nickname: "小红",
    avatar: "",
    wxid: "xiaohong",
    region: "上海",
    signature: "努力生活",
  },
  {
    id: 3,
    nickname: "我",
    avatar: "",
    wxid: "myself",
    region: "深圳",
    signature: "Coding!",
  },
];

// 会话示例
const initialSessions = [
  {
    id: 1,
    name: "小明",
    type: "private",
    userIds: [1, 3],
    lastMessage: "今晚一起吃饭？",
    lastTime: Date.now() - 3600 * 1000,
  },
  {
    id: 2,
    name: "前端交流群",
    type: "group",
    userIds: [1, 2, 3],
    lastMessage: "明天有分享会",
    lastTime: Date.now() - 7200 * 1000,
  },
];

// 消息示例
const initialMessages = {
  1: [
    {
      id: 1,
      userId: 1,
      content: "今晚一起吃饭？",
      time: Date.now() - 3600 * 1000,
    },
    {
      id: 2,
      userId: 3,
      content: "好啊，几点？",
      time: Date.now() - 3590 * 1000,
    },
  ],
  2: [
    {
      id: 1,
      userId: 2,
      content: "明天有分享会",
      time: Date.now() - 7200 * 1000,
    },
    {
      id: 2,
      userId: 1,
      content: "主题是什么？",
      time: Date.now() - 7190 * 1000,
    },
    { id: 3, userId: 3, content: "我也想参加", time: Date.now() - 7180 * 1000 },
  ],
};

export default function App() {
  const [sessionList, setSessionList] = useState(initialSessions);
  const [messageMap, setMessageMap] = useState(initialMessages);
  const [userList] = useState(users);
  const [currentSessionId, setCurrentSessionId] = useState(sessionList[0].id);
  const [inputValue, setInputValue] = useState("");

  // 发送消息
  const sendMessage = useCallback(() => {
    if (!inputValue.trim()) return;
    setInputValue(""); // 先清空
    const now = Date.now();
    const myUser = userList.find((u) => u.nickname === "我");
    const newMsg = {
      id: Date.now(),
      userId: myUser.id,
      content: inputValue,
      time: now,
    };
    setMessageMap((prev) => ({
      ...prev,
      [currentSessionId]: [...(prev[currentSessionId] || []), newMsg],
    }));
    setSessionList((prev) =>
      prev.map((s) =>
        s.id === currentSessionId
          ? { ...s, lastMessage: inputValue, lastTime: now }
          : s
      )
    );
  }, [inputValue, userList, currentSessionId]);

  return (
    <div className="big-box">
      <Feature />
      <List
        sessions={sessionList}
        users={userList}
        currentSessionId={currentSessionId}
        setCurrentSessionId={setCurrentSessionId}
      />
      <div className="remaining-area">
        <Message
          messages={messageMap[currentSessionId] || []}
          users={userList}
          session={sessionList.find((s) => s.id === currentSessionId)}
        />
        <Editor
          value={inputValue}
          setValue={setInputValue}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
}
