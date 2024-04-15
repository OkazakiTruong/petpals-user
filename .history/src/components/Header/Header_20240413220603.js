"use client";
import "./style.scss";
import { Socialicon } from "../Socialicon/Socialicon";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
export const Header = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const [loginUser, setLoginUser] = useState(null);
  const [bellActive, setBellActive] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    let current = localStorage.getItem("login-user");
    if (current) {
      current = JSON.parse(current);
      setLoginUser(current);
    }
  }, [setLoginUser]);

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
            <Link href="http://localhost:3000" className="petpals-logo">
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
            {loginUser ? (
              <>
                <div
                  className="icon-bell"
                  onClick={() => {
                    setBellActive(true);
                  }}
                >
                  <img src="/icon/Bell_ic.svg" alt="" />
                  <div className={`number-bell`}>{loginUser?.noti.length}</div>
                  <div
                    className={`overlay  ${bellActive ? "overlay-active" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setBellActive(false);
                      console.log(bellActive);
                    }}
                  ></div>
                  <div
                    className={`menu-bell ${
                      bellActive ? "menu-bell-active" : ""
                    }`}
                  >
                    <h3>Thông báo</h3>
                    <div className="container">
                      {loginUser?.noti.map((noti, index) => {
                        return (
                          <Link
                            href={noti.link}
                            className="menu-item"
                            key={index}
                          >
                            <span className="content">{noti.content}</span>
                            <span className="time">{noti.date}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="user-login-controller">
                  <span className="user-img">
                    <img src="/img/user_avatar.jpg" alt="" srcset="" />
                  </span>
                  <p
                    style={{
                      width: "112px",
                      textOverflow: "ellipsis",
                      textWrap: "nowrap",
                      overflow: "hidden",
                    }}
                  >
                    {loginUser.name}
                  </p>
                  <span>
                    <img src="/icon/flowbite_caret-down-solid.svg" alt="" />
                  </span>
                  <ul className="sub-nav" style={{ width: "267px" }}>
                    <li className="sub-nav-item">
                      <Link href="/thong-tin-tai-khoan">
                        Thông tin tài khoản
                      </Link>
                    </li>
                    <li className="sub-nav-item">
                      <Link href="/doi-mat-khau">Đổi mật khẩu</Link>
                    </li>
                    <li
                      className="sub-nav-item"
                      onClick={() => {
                        localStorage.removeItem("login-user");
                        setLoginUser(null);
                        window.location.href = "/";
                      }}
                    >
                      <span>Đăng xuất</span>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <div className="btn-group">
                <a href="/dang-ky" className="btn">
                  Đăng ký
                </a>
                <a href="/dang-nhap" className="btn">
                  Đăng nhập
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <ul className="nav">
        <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
          <a href="/">Trang chủ</a>
        </li>
        <li
          className={`nav-item ${pathname === "/ve-chung-toi" ? "active" : ""}`}
        >
          <a href="/ve-chung-toi">Giới thiệu</a>
        </li>
        <li
          className={`nav-item ${pathname.match(/dat-lich/) ? "active" : ""}`}
        >
          <span href="#">Đặt lịch</span>
          <span>
            <img src="/icon/down.svg" alt="" />
          </span>
          <ul className="sub-nav" style={{ width: "267px" }}>
            <li
              className={`sub-nav-item ${
                pathname === "/dat-lich/kham-benh" ? "sub-nav-item-active" : ""
              }`}
            >
              <a href="/dat-lich/kham-benh">Đặt Lịch Khám Bệnh</a>
            </li>
            <li
              className={`sub-nav-item ${
                pathname === "/dat-lich/spa-grooming"
                  ? "sub-nav-item-active"
                  : ""
              }`}
            >
              <a href="/dat-lich/spa-grooming">Đặt Lịch Spa-Grooming</a>
            </li>
            <li
              className={`sub-nav-item ${
                pathname === "/dat-lich/khach-san-thu-cung"
                  ? "sub-nav-item-active"
                  : ""
              }`}
            >
              <a href="/dat-lich/khach-san-thu-cung">Khách Sạn Thú Cưng</a>
            </li>
          </ul>
        </li>
        <li className={`nav-item ${pathname.match(/dich-vu/) ? "active" : ""}`}>
          <span>Dịch vụ</span>
          <span>
            <img src="/icon/down.svg" alt="" />
          </span>
          <ul className="sub-nav" style={{ width: "267px" }}>
            <li
              className={`sub-nav-item ${
                pathname.match(
                  /cap-cuu-24-24|do-de-ho-sinh|kham-benh|lay-cao-rang|phau-thuat-ngoai-khoa|sieu-am-x-quang-xet-nghiem|tiem-phong-vaccine|triet-san/
                )
                  ? "sub-nav-item-active"
                  : ""
              }`}
            >
              <span>Chăm sóc sức khỏe</span>
              <span>
                <img src="/icon/down.svg" alt="" />
              </span>
              <ul className="sub-nav nav-2" style={{ width: "359px" }}>
                <li
                  className={`sub-nav-item ${
                    pathname === "/dich-vu/cap-cuu-24-24"
                      ? "sub-nav-item-active"
                      : ""
                  }`}
                >
                  <a href="/dich-vu/cap-cuu-24-24">Cấp Cứu 24/24</a>
                </li>
                <li
                  className={`sub-nav-item ${
                    pathname === "/dich-vu/tiem-phong-vaccine"
                      ? "sub-nav-item-active"
                      : ""
                  }`}
                >
                  <a href="/dich-vu/tiem-phong-vaccine">Tiêm Phòng Vaccine</a>
                </li>
                <li
                  className={`sub-nav-item ${
                    pathname === "/dich-vu/kham-benh"
                      ? "sub-nav-item-active"
                      : ""
                  }`}
                >
                  <a href="/dich-vu/kham-benh">Khám Sức Khỏe</a>
                </li>
                <li
                  className={`sub-nav-item ${
                    pathname === "/dich-vu/sieu-am-x-quang-xet-nghiem"
                      ? "sub-nav-item-active"
                      : ""
                  }`}
                >
                  <a href="/dich-vu/sieu-am-x-quang-xet-nghiem">
                    Siêu Âm, X-Quang, Xét Nghiệm
                  </a>
                </li>
                <li
                  className={`sub-nav-item ${
                    pathname === "/dich-vu/phau-thuat-ngoai-khoa"
                      ? "sub-nav-item-active"
                      : ""
                  }`}
                >
                  <a href="/dich-vu/phau-thuat-ngoai-khoa">
                    Phẫu Thuật Ngoại Khoa
                  </a>
                </li>
                <li
                  className={`sub-nav-item ${
                    pathname === "/dich-vu/triet-san"
                      ? "sub-nav-item-active"
                      : ""
                  }`}
                >
                  <a href="/dich-vu/triet-san">Triệt Sản Thẩm Mỹ</a>
                </li>
                <li
                  className={`sub-nav-item ${
                    pathname === "/dich-vu/do-de-ho-sinh"
                      ? "sub-nav-item-active"
                      : ""
                  }`}
                >
                  <a href="/dich-vu/do-de-ho-sinh">Đỡ Đẻ Hộ Sinh</a>
                </li>
                <li
                  className={`sub-nav-item ${
                    pathname === "/dich-vu/lay-cao-rang"
                      ? "sub-nav-item-active"
                      : ""
                  }`}
                >
                  <a href="/dich-vu/lay-cao-rang">Lấy Cao Răng</a>
                </li>
              </ul>
            </li>
            <li
              className={`sub-nav-item ${
                pathname === "/dich-vu/spa-grooming"
                  ? "sub-nav-item-active"
                  : ""
              }`}
            >
              <a href="/dich-vu/spa-grooming">Spa-Grooming</a>
            </li>
            <li
              className={`sub-nav-item ${
                pathname === "/dich-vu/khach-san-thu-cung"
                  ? "sub-nav-item-active"
                  : ""
              }`}
            >
              <a href="/dich-vu/khach-san-thu-cung">Khách Sạn Thú Cưng</a>
            </li>
            <li className="sub-nav-item">
              <a href="/dich-vu/lien-he">Liên Hệ</a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#">Tìm lịch đặt</a>
        </li>
        <li
          className={`nav-item ${
            pathname === "/danh-sach-bai-viet" ? "active" : ""
          }`}
        >
          <a href="danh-sach-bai-viet">Bài viết</a>
        </li>
      </ul>
    </header>
  );
};
