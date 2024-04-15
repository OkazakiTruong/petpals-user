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
          <a className="petpals-logo">
            <img src="/img/logo_duongb.png" alt="logo-petpals" />
          </a>
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
          <div className="btn-group">
            <Link href="#">Đăng nhập</Link>
            <Link href="#">Đăng ký</Link>
          </div>
        </div>
      </div>
    </header>
  );
};
