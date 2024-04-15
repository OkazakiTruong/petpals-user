"use client";
import "./style.scss";
import { Socialicon } from "../Socialicon/Socialicon";
import { useEffect, useState } from "react";
import Link from "next/link";
import { DropDownMenu } from "../DropDownMenu/DropDownMenu";
export const Header = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const handleFocus = () => {
    setSearchFocus(true);
  };
  const handleBlur = () => {
    setSearchFocus(false);
  };
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
            <a className="petpals-logo">
              <img src="/img/logo_duongb.png" alt="logo-petpals" />
            </a>
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
              <div>Chuông</div>
              <div>Xin chào Bùi Quang Trưởng</div>
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
          <span>Trang chủ</span>
        </li>
        <li className="nav-item">
          <span>Giới thiệu</span>
        </li>
        <li className="nav-item">
          <span>Đặt lịch</span>
          <span>
            <img src="/icon/down.svg" alt="" />
          </span>
          <DropDownMenu />
        </li>
        <li className="nav-item">
          <span>Dịch vụ</span>
          <span>
            <img src="/icon/down.svg" alt="" />
          </span>
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
