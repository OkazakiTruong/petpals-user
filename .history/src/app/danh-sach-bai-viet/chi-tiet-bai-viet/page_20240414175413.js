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
        <div className="article-section-left">
          <h1 className="article-title">
            Bật mí cho bạn cách chăm sóc mèo con chu đáo nhất
          </h1>
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
          <div className="menu">
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <img src="/icon/hamberger.svg" alt="" style={{ width: "14px" }} />
              <p style={{ fontSize: "16px", fontWeight: "500" }}>
                MỤC LỤC BÀI VIẾT
              </p>
            </div>
            <p style={{ fontWeight: "500", margin: "20px 0" }}>
              Cách chăm sóc mèo con chu đáo nhất cho người nuôi
            </p>
            <ul style={{ listStyle: "inherit" }}>
              <li>Giữ ấm cho mèo con</li>
              <li>Xây dựng chế độ dinh dưỡng phù hợp</li>
              <li>Cho mèo con uống sữa như thế nào ?</li>
              <li>Mèo con khi cai sữa cần chăm sóc như thế nào ?</li>
              <li>Cách vệ sinh mèo con sao cho đúng</li>
              <li>Tắm cho mèo con</li>
              <li>Cho mèo con làm quen người</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
