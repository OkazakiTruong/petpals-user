"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { Checkbox } from "antd";
import Link from "next/link";
import { toast } from "react-toastify";

export default function page() {
  const [eye, setEye] = useState(false);
  const [users, setUsers] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  useEffect(() => {
    if (!localStorage.getItem("users")) {
      let users = [
        {
          email: "buiquangtruong1105@gmail.com",
          password: "truonG1105@",
        },
      ];
      localStorage.setItem("users", JSON.stringify(users));
      setUsers(users);
    } else {
      let users = localStorage.getItem("users");
      setUsers(JSON.parse(users));
    }
  }, [setUsers]);
  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmailError(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)
        ? null
        : "** Vui lòng nhập đúng định dạng Email!"
    );

    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPasswordError(
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(
        e.target.value
      )
        ? null
        : "** Mật khẩu phải có ít nhất 8 ký tự, 1 chữ in hoa, 1 chũ số và 1 ký tự đặc biệt"
    );
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    let flag = true;
    if (email === "") {
      setEmailError("** Không được bỏ trống!!");
      flag = false;
    }
    if (password === "") {
      setPasswordError("** Không được bỏ trống!!");
      flag = false;
    }
    e.preventDefault();
    users.map((user) => {
      if (user.email === email && user.password === password) {
        toast.success("Đăng nhập thành công");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
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
          <form className="form" onSubmit={handleSubmit}>
            <h1 className="form-heading">Đăng nhập</h1>
            <div className="input-group">
              <label htmlFor="">Email:</label>
              <input
                type="text"
                placeholder="Nhập Email..."
                onChange={handleEmailChange}
                className={emailError ? "input-err" : ""}
              />
              <p className="error">{emailError}</p>
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
              <p className="error">{passwordError}</p>
            </div>
            <div className="option-group">
              <Checkbox onChange={() => {}}>Ghi nhớ thông tin</Checkbox>
              <Link href="#">Quên mật khẩu?</Link>
            </div>
            <button>ĐĂNG NHẬP</button>
          </form>
        </div>
      </div>
    </main>
  );
}
