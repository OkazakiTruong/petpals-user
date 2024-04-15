"use client";
import "./style.scss";
import { Socialicon } from "../Socialicon/Socialicon";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
export const Header = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const [loginUser, setLoginUser] = useState(null);

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
            {loginUser ? (
              <>
                <div className="icon">
                  <img src="/icon/Bell_ic.svg" alt="" />
                </div>
                <div className="user-login-controller">
                  <span className="user-img">
                    <img src="/img/user_avatar.png" alt="" srcset="" />
                  </span>
                  <p>{loginUser.name}</p>
                  <span>
                    <img src="/icon/flowbite_caret-down-solid.svg" alt="" />
                  </span>
                  <ul className="sub-nav" style={{ width: "267px" }}>
                    <li className="sub-nav-item">Thông tin tài khoản</li>
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
                      Đăng xuất
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <div className="btn-group">
                <Link href="/dang-ky" className="btn">
                  Đăng ký
                </Link>
                <Link href="/dang-nhap" className="btn">
                  Đăng nhập
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <ul className="nav">
        <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
          <Link href="/">Trang chủ</Link>
        </li>
        <li
          className={`nav-item ${pathname === "/ve-chung-toi" ? "active" : ""}`}
        >
          <Link href="/ve-chung-toi">Giới thiệu</Link>
        </li>
        <li className="nav-item">
          <span href="#">Đặt lịch</span>
          <span>
            <img src="/icon/down.svg" alt="" />
          </span>
          <ul className="sub-nav" style={{ width: "267px" }}>
            <li className="sub-nav-item">
              <Link href="#">Đặt Lịch Khám Bệnh</Link>
            </li>
            <li className="sub-nav-item">
              <Link href="#">Đặt Lịch Spa-Grooming</Link>
            </li>
            <li className="sub-nav-item">
              <Link href="#">Khách Sạn Thú Cưng</Link>
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
              className={`sub-nav-item ${pathname.match(
                /cap-cuu-24-24|do-de-ho-sinh|kham-benh|lay-cao-rang|phau-thuat-ngoai-khoa|sieu-am-x-quang-xet-nghiem|tiem-phong-vaccine|triet-san/
              )}`}
            >
              <span>Chăm sóc sức khỏe</span>
              <span>
                <img src="/icon/down.svg" alt="" />
              </span>
              <ul className="sub-nav nav-2" style={{ width: "359px" }}>
                <li className="sub-nav-item">
                  <Link href="#">Cấp Cứu 24/24</Link>
                </li>
                <li className="sub-nav-item">
                  <Link href="#">Tiêm Phòng Vaccine</Link>
                </li>
                <li className="sub-nav-item">
                  <Link href="#">Khám Sức Khỏe</Link>
                </li>
                <li className="sub-nav-item">
                  <Link href="#">Siêu Âm, X-Quang, Xét Nghiệm</Link>
                </li>
                <li className="sub-nav-item">
                  <Link href="#">Phẫu Thuật Ngoại Khoa</Link>
                </li>
                <li className="sub-nav-item">
                  <Link href="#">Triệt Sản Thẩm Mỹ</Link>
                </li>
                <li className="sub-nav-item">
                  <Link href="#">Đỡ Đẻ Hộ Sinh</Link>
                </li>
                <li className="sub-nav-item">
                  <Link href="#">Lấy Cao Răng</Link>
                </li>
              </ul>
            </li>
            <li className="sub-nav-item">Spa-Grooming</li>
            <li className="sub-nav-item">Khách Sạn Thú Cưng</li>
            <li className="sub-nav-item">Liên Hệ</li>
          </ul>
        </li>
        <li className="nav-item">
          <Link href="#">Tìm lịch đặt</Link>
        </li>
        <li
          className={`nav-item ${
            pathname === "/danh-sach-bai-viet" ? "active" : ""
          }`}
        >
          <Link href="danh-sach-bai-viet">Bài viết</Link>
        </li>
      </ul>
    </header>
  );
};
