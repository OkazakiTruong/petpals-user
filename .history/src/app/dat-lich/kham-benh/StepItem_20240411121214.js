"use-client";
import "./style.scss";
import React, { useEffect, useRef } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Input } from "antd";

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
            <div>
              <input
                type="radio"
                name="time"
                id="time-1"
                value="9:00 - 10:00"
              />
              <label htmlFor="time-1" className="custom-time">
                9:00 -10:00
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="time"
                id="time-2"
                value="10:00 - 11:00"
              />
              <label htmlFor="time-2" className="custom-time">
                10:00 -11:00
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="time"
                id="time-3"
                value="11:00 - 12:00"
              />

              <label htmlFor="time-3" className="custom-time">
                11:00 -12:00
              </label>
            </div>
          </div>
          <p>Buổi chiều</p>
          <div className="form-row">
            <div>
              <input
                type="radio"
                name="time"
                id="time-4"
                value="13:00 - 14:00"
              />

              <label htmlFor="time-4" className="custom-time">
                13:00 -14:00
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="time"
                id="time-5"
                value="10:00 - 11:00"
              />

              <label htmlFor="time-5" className="custom-time">
                14:00 -15:00
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="time"
                id="time-6"
                value="11:00 - 12:00"
              />
              <label htmlFor="time-6" className="custom-time">
                15:00 -16:00
              </label>
            </div>
          </div>
          <p>Buổi tối</p>
          <div className="form-row">
            <div>
              <input type="radio" name="time" id="time-7" value="16:00-17:00" />

              <label htmlFor="time-7" className="custom-time">
                16:00-17:00
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="time"
                id="time-5"
                value="10:00 - 11:00"
              />

              <label htmlFor="time-5" className="custom-time">
                14:00 -15:00
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="time"
                id="time-6"
                value="11:00 - 12:00"
              />
              <label htmlFor="time-6" className="custom-time">
                15:00 -16:00
              </label>
            </div>
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
