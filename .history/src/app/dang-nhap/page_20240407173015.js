import React from "react";
import "./style.scss";

export default function page() {
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
        <form className="form">
          <h1 className="form-heading">Đăng nhập</h1>
          <div className="input-group">
            <label htmlFor="">Email:</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label htmlFor="">Mật khẩu:</label>
            <div>
              <input type="password" name="" id="" />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
