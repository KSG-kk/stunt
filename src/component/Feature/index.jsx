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

        <div className="component">
          <div className="component-box">信息</div>
        </div>
        <div className="component">
          <div className="component-box">联系人</div>
        </div>
        <div className="component">
          <div className="component-box">收藏</div>
        </div>
        <div className="component">
          <div className="component-box">文件夹</div>
        </div>
        <div className="component">
          <div className="component-box">朋友圈</div>
        </div>
        <div className="component">
          <div className="component-box">视频号</div>
        </div>
        <div className="component">
          <div className="component-box">看一看</div>
        </div>
        <div className="component">
          <div className="component-box">搜一搜</div>
        </div>
        <div className="component">
          <div className="component-box">小程序</div>
        </div>
        <div className="component">
          <div className="component-box">我的手机</div>
        </div>
        <div className="component">
          <div className="component-box">其他</div>
        </div>
      </div>
    );
  }
}
