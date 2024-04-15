"use client";
import React from "react";

export default function PetComponent() {
  return (
    <div className="pet-item">
      <h3>Thông tin thú cưng (Danh sách thứ 1):</h3>
      <div className="form-row">
        <div className="input-group">
          <label htmlFor="">Tên thú cưng của bạn: </label>
          <input type="text" placeholder="Nhập tên của bạn" />
          <div className="error">{}</div>
        </div>
        <div className="input-group">
          <label htmlFor="">Chủng loại</label>
          <input type="text" placeholder="Nhập số điện thoại của bạn" />
          <div className="error">{}</div>
        </div>
      </div>
      <div className="form-row">
        <label htmlFor="">Giới tính</label>
        <input type="radio" name="gender" />
        <label htmlFor="">Đực</label>
        <input type="radio" name="gender" />
      </div>
    </div>
  );
}
