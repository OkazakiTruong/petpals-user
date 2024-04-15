import React from "react";
import "./style.scss";

export default function page() {
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Danh sách bài viết</p>
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Chi tiết bài viết</p>
      </div>
      <div className="article-section">
        <h1 className="article-title">
          Bật mí cho bạn cách chăm sóc mèo con chu đáo nhất
        </h1>
        <div className="article-author-time">
          <div className="article-item">
            <img src="/icon/ph_user.svg" alt="" />
            <p>Tác giả: Bùi Quang Trưởng</p>
          </div>
          <div className="article-item">
            <img src="/icon/ph_user.svg" alt="" />
            <p>11/05/2024</p>
          </div>
        </div>
      </div>
    </main>
  );
}
