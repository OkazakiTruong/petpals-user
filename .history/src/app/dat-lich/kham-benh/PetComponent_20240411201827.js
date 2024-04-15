import React from "react";

export default function PetComponent() {
  return (
    <div className="pet-item">
      <h3>Thông tin thú cưng (Danh sách thứ 1):</h3>
      <div className="form-row">
        <div className="input-group">
          <label htmlFor="">Họ và tên: </label>
          <input type="text" placeholder="Nhập tên của bạn" />
          <div className="error">{}</div>
        </div>
        <div className="input-group">
          <label htmlFor="">Số điện thoại(10 số):</label>
          <input type="text" placeholder="Nhập số điện thoại của bạn" />
          <div className="error">{}</div>
        </div>
      </div>
    </div>
  );
}
