"use-client";
import "./style.scss";
import React, { useEffect, useRef } from "react";
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

export default function StepItem({ step }) {
  const EditRef = useRef();
  const disabledDate = (current) => {
    //disable những lịch từ ngày hôm qua
    return current && current < dayjs().endOf("day").subtract(1, "day");
  };
  if (step === 0) {
    return (
      <form>
        <h3>Thông tin lịch đặt (Thời gian và thông tin người dùng):</h3>
        <div className="form-row">
          <div className="input-group">
            <label htmlFor="">Họ và tên: </label>
            <input type="text" placeholder="Nhập tên của bạn" />
          </div>
          <div className="input-group">
            <label htmlFor="">Số điện thoại(10 số):</label>
            <input type="text" placeholder="Nhập tên của bạn" />
          </div>
        </div>
        <div className="form-row">
          <div className="input-group">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Nhập vào email của bạn" />
          </div>
          <div className="input-group date-time-picker">
            <label htmlFor="">Lựa chọn ngày làm</label>
            <DatePicker onChange={() => {}} disabledDate={disabledDate} />
          </div>
        </div>
        <h3>Thông tin chi tiết thời gian đặt:</h3>
        <div className="time-select">
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
                      checked={item.id === 1 ? "checked" : ""}
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
