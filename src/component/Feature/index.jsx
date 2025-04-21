
import React, { Component } from "react";
import "./index.css";

export default class Feature extends Component {
  render() {
    return (
      <div className="container">
        <div className="top-dots">
          <span className="dot dot1"></span>
          <span className="dot dot2"></span>
          <span className="dot dot3"></span>
        </div>

        <div className="avatar-container">
          <div className="avatar">头像</div>
        </div>

        {[
          "信息",
          "联系人",
          "收藏",
          "文件夹",
          "朋友圈",
          "视频号",
          "看一看",
          "搜一搜",
          "小程序",
          "我的手机",
          "其他",
        ].map((item, index) => (
          <div key={index} className="component">
            <div className="component-box">{item}</div>
          </div>
        ))}
      </div>
    );
  }
}
