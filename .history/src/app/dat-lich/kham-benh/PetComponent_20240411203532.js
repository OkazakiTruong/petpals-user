"use client";
import React from "react";
import { Select, Space } from "antd";

export default function PetComponent() {
  return (
    <div className="pet-item">
      <h3>Thông tin thú cưng (Danh sách thứ 1):</h3>
      <div className="form-row">
        <div className="input-group">
          <label htmlFor="">Tên thú cưng của bạn: </label>
          <input type="text" placeholder="Nhập tên thú cưng" />
          <div className="error">{}</div>
        </div>
        <div className="input-group">
          <label htmlFor="">Chủng loại</label>
          <Select
            defaultValue="Chó"
            style={{
              width: "100%",
              height: "56px",
            }}
            // onChange={handleChange}
            options={[
              {
                value: "Chó",
                label: "Chó",
              },
              {
                value: "Mèo",
                label: "Mèo",
              },
              {
                value: "Thỏ",
                label: "Thỏ",
              },
              {
                value: "Khác",
                label: "Khác",
              },
            ]}
          />

          <div className="error">{}</div>
        </div>
      </div>
      <div className="gender">
        <div>
          <label htmlFor="">Giới tính</label>
          <input type="radio" name="gender" />
        </div>
        <div>
          <label htmlFor="">Đực</label>
          <input type="radio" name="gender" />
        </div>
      </div>
    </div>
  );
}
