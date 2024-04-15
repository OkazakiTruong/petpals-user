"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function page() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  useEffect(() => {
    if (loading) {
      emailjs
        .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
          publicKey: "YOUR_PUBLIC_KEY",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  }, [loading, setLoading]);

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmailError(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)
        ? null
        : "** Vui lòng nhập đúng định dạng Email!"
    );

    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = true;
    if (email === "") {
      setEmailError("** Không được bỏ trống!!");
      flag = false;
    }

    if (flag && email !== null) {
      setLoading(true);
    }
  };

  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Đăng ký</p>
      </div>
      <div className="wrapper">
        <div className="img">
          <div className="overlay"></div>
          <div className="content">
            <img src="/img/logo_am_ban.svg" alt="" />
            <h3>"CHỮA LÀNH TỪ TRÁI TIM"</h3>
          </div>
        </div>
        <div className="form-wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <h1 className="form-heading">QUÊN MẬT KHẨU</h1>
            <div className="input-group">
              <label htmlFor="">Email:</label>
              <input
                type="text"
                placeholder="Nhập Email..."
                onChange={handleEmailChange}
                className={emailError ? "input-err" : ""}
                name="user_email"
              />
              <p className="error">{emailError}</p>
            </div>
            <button>
              {loading ? (
                <img src="/loading/rooling_loading.gif" alt="" />
              ) : (
                `LẤY LẠI MẬT KHẨU`
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
