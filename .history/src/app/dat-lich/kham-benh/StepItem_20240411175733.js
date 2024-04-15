"use-client";
import "./style.scss";
// import { Link } from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
const dateList = [
  { id: 0, value: "9:00 - 10:00" },
  { id: 1, value: "10:00 - 11:00" },
  { id: 2, value: "11:00 - 12:00" },
  { id: 3, value: "12:00 - 13:00" },
  { id: 4, value: "13:00 - 14:00" },
  { id: 5, value: "14:00 - 15:00" },
  { id: 6, value: "15:00 - 16:00" },
  { id: 7, value: "16:00 - 17:00" },
  { id: 8, value: "17:00 - 18:00" },
  { id: 9, value: "18:00 - 19:00" },
  { id: 10, value: "19:00 - 20:00" },
  { id: 11, value: "20:00 - 21:00" },
];

dayjs.extend(customParseFormat);

export default function StepItem({ step, changeCurrent }) {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userDay, setUserDay] = useState("");
  const [userTime, setUserTime] = useState("");

  //state bắt lỗi
  const [userNameError, setUserNameError] = useState("");
  const [userPhoneError, setUserPhoneError] = useState("");
  const [userEmailError, setUserEmailError] = useState("");
  const [userDayError, setUserDayError] = useState("");
  const [userTimeError, setUserTimeError] = useState("");

  const disabledDate = (current) => {
    //disable những lịch từ ngày hôm qua
    return current && current < dayjs().endOf("day").subtract(1, "day");
  };
  const handleChangeUserName = (e) => {
    e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 0) {
      let flag = true;
      if (
        userName === "" ||
        userPhone === "" ||
        userEmail === "" ||
        userDay === "" ||
        userTime === ""
      ) {
        setUserNameError("** Không được bỏ trống!");
        setUserPhoneError("** Không được bỏ trống!");
        setUserEmailError("** Không được bỏ trống!");
        setUserDayError("** Vui lòng chọn ngày thăm khám!");
        setUserTimeError("** Vui lòng chọn một giờ khám cụ thể!");

        flag = false;
      }
      if (flag) {
      }
      //   if (

      //   ) {
      //     toast.warning("Không được bỏ trống");
      //   } else {
      //     changeCurrent(1);
      //   }
    }
  };

  if (step === 0) {
    return (
      <form onSubmit={handleSubmit}>
        <h3>Thông tin lịch đặt (Thời gian và thông tin người dùng):</h3>
        <div className="form-row">
          <div className="input-group">
            <label htmlFor="">Họ và tên: </label>
            <input type="text" placeholder="Nhập tên của bạn" />
            <div className="error">{userNameError}</div>
          </div>
          <div className="input-group">
            <label htmlFor="">Số điện thoại(10 số):</label>
            <input type="text" placeholder="Nhập tên của bạn" />
            <div className="error">{userPhoneError}</div>
          </div>
        </div>
        <div className="form-row">
          <div className="input-group">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Nhập vào email của bạn" />
            <div className="error">{userEmailError}</div>
          </div>
          <div className="input-group date-time-picker">
            <label htmlFor="">Lựa chọn ngày làm</label>
            <DatePicker
              onChange={() => {}}
              disabledDate={disabledDate}
              placeholder="Chọn ngày"
            />
            <div className="error">{userDayError}</div>
          </div>
        </div>
        <h3>Thông tin chi tiết thời gian đặt:</h3>
        <div className="time-select">
          <div className="error">{userTimeError}</div>
          <p>Buổi sáng</p>
          <div className="form-row">
            {dateList.map((item, index) => {
              if (0 <= item.id && item.id <= 2) {
                return (
                  <div>
                    <input
                      type="radio"
                      name="time"
                      id={`item-` + item.id}
                      value={item.value}
                      //   defaultChecked={item.id === 0}
                    />
                    <label htmlFor={`item-` + item.id} className="custom-time">
                      {item.value}
                    </label>
                  </div>
                );
              }
            })}
          </div>
          <p>Buổi chiều</p>
          <div className="form-row">
            {dateList.map((item, index) => {
              if (3 <= item.id && item.id <= 8) {
                return (
                  <div>
                    <input
                      type="radio"
                      name="time"
                      id={`item-` + item.id}
                      value={item.value}
                    />
                    <label htmlFor={`item-` + item.id} className="custom-time">
                      {item.value}
                    </label>
                  </div>
                );
              }
            })}
          </div>
          <p>Buổi tối</p>
          <div className="form-row">
            {dateList.map((item, index) => {
              if (9 <= item.id && item.id <= 12) {
                return (
                  <div>
                    <input
                      type="radio"
                      name="time"
                      id={`item-` + item.id}
                      value={item.value}
                    />
                    <label htmlFor={`item-` + item.id} className="custom-time">
                      {item.value}
                    </label>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="btn-wrapper">
          <a className="btn prev-btn" href="/">
            Hủy
          </a>
          <button className="btn next-btn">Tiếp tục</button>
        </div>
      </form>
    );
  }
  if (step === 1) {
    return <div>Step 2</div>;
  }
  if (step === 2) {
    return <div>Step 3</div>;
  }
  if (step === 3) {
    return <div>Step 4</div>;
  }
}
