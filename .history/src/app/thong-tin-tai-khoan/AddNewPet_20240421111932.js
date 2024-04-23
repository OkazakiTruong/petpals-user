"use client";
import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Select } from "antd";
import "./addnewpet.scss";

export default function AddNewPet() {
  return (
    <>
      <div className="overlay"></div>
      <form className="add-new-pet-pop-up">
        <h2>Thêm mới một thú cưng</h2>
        <div className="close-icon">
          <CloseOutlined />
        </div>
        <div className="col-wrapper">
          <div className="col-left">
            <img src="/img/doctor/bui_thao.jpg" alt="" />
            <button type="button">Thêm ảnh</button>
          </div>
          <div className="col-right">
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Tên thú cưng:</label>
                <input
                  type="text"
                  placeholder="Nhập tên thú cưng"
                  style={{ width: 675, height: 40, padding: "0 20px" }}
                />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Chủng loại:</label>
                <Select
                  defaultValue="lucy"
                  style={{
                    width: 328,
                    height: 40,
                  }}
                  options={[
                    {
                      value: "dog",
                      label: "Chó",
                    },
                    {
                      value: "cat",
                      label: "Mèo",
                    },
                    {
                      value: "other",
                      label: "Khác",
                    },
                  ]}
                />
              </div>
              <div className="input-group">
                <label htmlFor="">Giống loài</label>
                <input type="text" placeholder="Nhập tuổi" />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="">Tuổi:</label>
                <input type="text" placeholder="Nhập tuổi" />
              </div>
              <div className="input-group">
                <label htmlFor="">Giới tính</label>
                <input type="text" placeholder="Nhập tuổi" />
              </div>
            </div>
          </div>
        </div>

        <div className="btn-group">
          <button className="btn btn-cancel" type="button">
            Hủy
          </button>
          <button className="btn btn-save">Lưu</button>
        </div>
      </form>
    </>
  );
}
