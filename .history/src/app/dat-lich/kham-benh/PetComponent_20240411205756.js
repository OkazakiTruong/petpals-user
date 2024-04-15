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
      <p>Giới tính</p>
      <div className="form-row">
        <div className="gender">
          <div>
            <input type="radio" name="gender" id="male" value={true} />
            <label htmlFor="">Đực</label>
          </div>
          <div>
            <input type="radio" name="gender" id="female" value={false} />
            <label htmlFor="">Cái</label>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="input-group">
          <label htmlFor="">Tuổi: </label>
          <input type="text" placeholder="Không bắt buộc" />
          <div className="error">{}</div>
        </div>
        <div className="input-group">
          <label htmlFor="">Giống loài: </label>
          <input type="text" placeholder="Không bắt buộc" />
          <div className="error">{}</div>
        </div>
      </div>
    </div>
  );
}
