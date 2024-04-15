"use client";
import React, { useState } from "react";
import "./style.scss";
import { Checkbox } from "antd";
import Link from "next/link";

export default function page() {
  const [eye, setEye] = useState();
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
          <form className="form">
            <h1 className="form-heading">Đăng nhập</h1>
            <div className="input-group">
              <label htmlFor="">Email:</label>
              <input type="text" placeholder="Nhập Email..." />
            </div>
            <div className="input-group">
              <label htmlFor="">Mật khẩu:</label>
              <div className="custom-eye">
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Nhập mật khẩu..."
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
