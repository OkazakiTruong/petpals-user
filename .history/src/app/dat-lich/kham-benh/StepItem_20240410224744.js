"use-client";
import "./style.scss";
import React, { useEffect } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Input } from "antd";

dayjs.extend(customParseFormat);

export default function StepItem({ step }) {
  const disabledDate = (current) => {
    //disable những lịch từ ngày hôm qua
    return current && current < dayjs().endOf("day").subtract(1, "day");
  };
  if (step === 0) {
    return (
      <form>
        <h3>Thông tin lịch đặt (Thời gian và thông tin người dùng):</h3>
        <div className="row">
          <div className="input-group">
            <label htmlFor="">Họ và tên: </label>
            <input type="text" placeholder="Nhập tên của bạn" />
          </div>
          <div className="input-group">
            <label htmlFor="">Số điện thoại(10 số):</label>
            <input type="text" placeholder="Nhập tên của bạn" />
          </div>
        </div>
        <div className="row">
          <div className="input-group">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Nhập vào email của bạn" />
          </div>
          <div className="input-group">
            <label htmlFor="">Lựa chọn ngày làm</label>
            <DatePicker onChange={() => {}} disabledDate={disabledDate} />
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
