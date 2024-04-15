import React from "react";
import "./style.scss";

export default function TinyArticle() {
  return (
    <div className="tiny-article-item">
      <img src="/img/articles/article-2.jpg" alt="" />
      <div className="content">
        <h3>Cách dạy chó đi vệ sinh đúng chỗ</h3>
        <div className="article-author-time">
          <div className="article-item">
            <img src="/icon/ph_user.svg" alt="" />
            <p>Tác giả: Bùi Quang Trưởng</p>
          </div>
          <div className="article-item">
            <img src="/icon/clarity_date-line.svg" alt="" />
            <p>11/05/2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
