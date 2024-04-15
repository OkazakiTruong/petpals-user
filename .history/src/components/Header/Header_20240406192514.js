"use client";
import "./style.scss";
import { Socialicon } from "../Socialicon/Socialicon";
import { useEffect, useState } from "react";
import Link from "next/link";
export const Header = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const handleFocus = () => {
    setSearchFocus(true);
  };
  const handleBlur = () => {
    setSearchFocus(false);
  };
  useEffect(() => {
    localStorage.setItem("login", "check");
  });
  return (
    <header>
      <div>
        <div className="wrap top-header">
          <p>Petpals - Hệ thống chăm sóc thú y đẳng cấp</p>
          <div className="social-connect">
            <p>Ghé thăm chúng tôi tại</p>
            <Socialicon />
          </div>
        </div>
      </div>
      <div>
        <div className="wrap main-header">
          <div>
            <Link href="/" className="petpals-logo">
              <img src="/img/logo_duong_ban.svg" alt="logo-petpals" />
            </Link>
          </div>
          <div className="header-main-right">
            <div className="search-input">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <div className="icon-item">
                {!searchFocus ? (
                  <img src="/icon/mingcute_search-line.svg" alt="" />
                ) : (
                  <img
                    src="/icon/mingcute_close-fill.svg"
                    alt=""
                    onClick={handleBlur}
                  />
                )}
              </div>
            </div>
            {/* <>
              <div className="icon">
                <img src="/icon/Bell_ic.svg" alt="" />
              </div>
              <div className="user-login-controller">
                <span className="user-img">
                  <img src="/img/user_avatar.png" alt="" srcset="" />
                </span>
                <p>Bùi Quang Trưởng</p>
                <span>
                  <img src="/icon/flowbite_caret-down-solid.svg" alt="" />
                </span>
                <ul className="sub-nav" style={{ width: "267px" }}>
                  <li className="sub-nav-item">Thông tin tài khoản</li>
                  <li className="sub-nav-item">Đổi mật khẩu</li>
                  <li className="sub-nav-item">Đăng xuất</li>
                </ul>
              </div>
            </> */}
            <div className="btn-group">
              <Link href="#" className="btn">
                Đăng ký
              </Link>
              <Link href="#" className="btn">
                Đăng nhập
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ul className="nav">
        <li className="nav-item active">
          <Link href="/">Trang chủ</Link>
        </li>
        <li className="nav-item">
          <span>Giới thiệu</span>
        </li>
        <li className="nav-item">
          <span>Đặt lịch</span>
          <span>
            <img src="/icon/down.svg" alt="" />
          </span>
          <ul className="sub-nav" style={{ width: "267px" }}>
            <li className="sub-nav-item">Đặt Lịch Khám Bệnh</li>
            <li className="sub-nav-item">Đặt Lịch Spa-Grooming</li>
            <li className="sub-nav-item">Khách Sạn Thú Cưng</li>
          </ul>
        </li>
        <li className="nav-item">
          <span>Dịch vụ</span>
          <span>
            <img src="/icon/down.svg" alt="" />
          </span>
          <ul className="sub-nav" style={{ width: "267px" }}>
            <li className="sub-nav-item">
              Chăm sóc sức khỏe
              <span>
                <img src="/icon/down.svg" alt="" />
              </span>
              <ul className="sub-nav nav-2" style={{ width: "359px" }}>
                <li className="sub-nav-item">Cấp Cứu 24/24</li>
                <li className="sub-nav-item">Tiêm Phòng Vaccine</li>
                <li className="sub-nav-item">Khám Sức Khỏe</li>
                <li className="sub-nav-item">Siêu Âm, X-Quang, Xét Nghiệm</li>
                <li className="sub-nav-item">Phẫu Thuật Ngoại Khoa</li>
                <li className="sub-nav-item">Triệt Sản Thẩm Mỹ</li>
                <li className="sub-nav-item">Đỡ Đẻ Hộ Sinh</li>
                <li className="sub-nav-item">Lấy Cao Răng</li>
              </ul>
            </li>
            <li className="sub-nav-item">Spa-Grooming</li>
            <li className="sub-nav-item">Khách Sạn Thú Cưng</li>
            <li className="sub-nav-item">Liên Hệ</li>
          </ul>
        </li>
        <li className="nav-item">
          <span>Tìm lịch đặt</span>
        </li>
        <li className="nav-item">
          <span>Bài viết</span>
        </li>
      </ul>
    </header>
  );
};
