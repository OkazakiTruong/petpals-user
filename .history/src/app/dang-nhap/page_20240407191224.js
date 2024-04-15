"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { Checkbox } from "antd";
import Link from "next/link";

export default function page() {
  const [eye, setEye] = useState(false);
  const [users, setUsers] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (!localStorage.getItem("users")) {
      let users = [
        {
          email: "buiquangtruong1105@gmail.com",
          password: "truonG1105@",
        },
      ];
      localStorage.setItem("users", users);
      setUsers(users);
    } else {
      let users = localStorage.getItem("users");
      setUsers(users);
    }
  }, [setUsers]);
  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    e.preventDefault();
    users.map((user) => {
      if (user.email !== email || user.password !== password) {
        console.log("Đăng nhập thất bại");
      } else {
        console.log("Đăng nhập thành công");
      }
    });
  };
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Đăng nhập</p>
      </div>
      <div className="login-wrapper">
        <div className="img">
          <div className="overlay"></div>
          <div className="content">
            <img src="/img/logo_am_ban.svg" alt="" />
            <h3>"CHỮA LÀNH TỪ TRÁI TIM"</h3>
          </div>
        </div>
        <div className="form-wrapper">
          <form className="form" onSubmit={handleSubmit()}>
            <h1 className="form-heading">Đăng nhập</h1>
            <div className="input-group">
              <label htmlFor="">Email:</label>
              <input
                type="text"
                placeholder="Nhập Email..."
                onChange={handleEmailChange()}
              />
            </div>
            <div className="input-group">
              <label htmlFor="">Mật khẩu:</label>
              <div className="custom-eye">
                <input
                  type={eye ? "text" : "password"}
                  placeholder="Nhập mật khẩu..."
                  onChange={handlePasswordChange}
                />
                <img
                  src={eye ? `/icon/eye-btn-close.svg` : `/icon/eye-btn.svg`}
                  alt=""
                  onClick={() => {
                    setEye(!eye);
                  }}
                />
              </div>
            </div>
            <div className="option-group">
              <Checkbox onChange={() => {}}>Ghi nhớ thông tin</Checkbox>
              <Link href="#">Quên mật khẩu?</Link>
            </div>
            <button type="submit">ĐĂNG NHẬP</button>
          </form>
        </div>
      </div>
    </main>
  );
}
