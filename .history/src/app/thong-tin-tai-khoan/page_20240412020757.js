"use client";
import "./style.scss";
import React, { useState } from "react";
import {
  UserOutlined,
  BookOutlined,
  LockOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu, DatePicker } from "antd";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Thông tin tài khoản", "1", <UserOutlined />),
  getItem("Quản lý lịch đặt", "sub1", <BookOutlined />, [
    getItem("Lịch chờ khám", "2"),
    getItem("Lịch đã khám", "3"),
    getItem("Lịch đã hủy", "4"),
  ]),
  getItem("Thay đổi mật khẩu", "5", <LockOutlined />),
  getItem("Đăng xuất", "6", <LogoutOutlined />),
];

export default function page() {
  const [current, setCurrent] = useState(1);
  const onClick = (e) => {
    if (e.key === "5") {
      window.location.href = "#";
    }
    if (e.key === "6") {
      localStorage.removeItem("login-user");
      window.location.href = "/";
    }
    setCurrent(+e.key);
  };
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Thông tin tài khoản</p>
      </div>
      <section className="information-section">
        <div className="section-left">
          <div
            className="section-left-heading"
            style={{ display: "flex", alignItems: "center", gap: "20px" }}
          >
            <img src="/img/user_avatar.png" alt="" style={{ width: "60px" }} />
            <p>
              <b>Bùi Quang Trưởng</b>
            </p>
          </div>
          <Menu
            onClick={onClick}
            style={{
              width: 256,
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
        </div>
        <div className="section-right">
          {current === 1 && (
            <>
              <div className="section-right-heading">
                <h2>THÔNG TIN TÀI KHOẢN</h2>
              </div>
              <div className="section-right-content">
                <form>
                  <div className="input-group">
                    <label htmlFor="">Tên đăng nhập: </label>
                    <input type="text" value="bùi quang trưởng" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="">Email: </label>
                    <input type="text" value="email" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="">Số điện thoại: </label>
                    <input type="text" value="0812312312" />
                  </div>
                  <div className="gender">
                    <p>Giới tính</p>
                    <div className="gender-group">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        defaultChecked
                      />
                      <label htmlFor="male">Nam</label>
                    </div>
                    <div className="gender-group">
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                      />
                      <label htmlFor="female">Nữ</label>
                    </div>
                    <div className="gender-group">
                      <input
                        type="radio"
                        id="other"
                        name="gender"
                        value="other"
                      />
                      <label htmlFor="other">Khác</label>
                    </div>
                  </div>
                  <div className="input-group">
                    <label htmlFor="">Ngày sinh</label>
                  </div>
                </form>
              </div>
            </>
          )}
          {current === 2 && <div>Màn 2</div>}
          {current === 3 && <div>Màn 3</div>}
          {current === 4 && <div>Màn 4</div>}
        </div>
      </section>
    </main>
  );
}
