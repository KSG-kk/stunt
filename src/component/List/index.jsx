import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  render() {
    return (
      <div className="vertical-list">
        <div className="top-widget">
          <input type="text" className="search-input" placeholder="搜索" />
          <div className="add-box">+</div>
        </div>
      </div>
    );
  }
}
