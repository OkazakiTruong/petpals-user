"use client";
import "./style.scss";
import React, { useState } from "react";
import {
  UserOutlined,
  BookOutlined,
  LockOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

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
    console.log("click ", e);
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
        <div className="section-right">{}</div>
      </section>
    </main>
  );
}
