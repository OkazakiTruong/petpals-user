import React from "react";
import "./style.scss";

export default function TinyArticle({ article }) {
  return (
    <div className="tiny-article-item">
      <img src={article?.img} alt="" />
      <div className="content">
        <h3>{article?.title}</h3>
        <div className="article-author-time">
          <div className="article-item">
            <img src="/icon/ph_user.svg" alt="" />
            <p>Tác giả: Bùi Quang Trưởng</p>
          </div>
          <div className="article-item">
            <img src="/icon/clarity_date-line.svg" alt="" />
            <p>11/05/2024</p>
          </div>
          <p style={{ color: "black", marginTop: "6px" }}>
            Ve chó (rận chó), bọ chét đang là nỗi đau đầu c ...
          </p>
        </div>
      </div>
    </div>
  );
}
