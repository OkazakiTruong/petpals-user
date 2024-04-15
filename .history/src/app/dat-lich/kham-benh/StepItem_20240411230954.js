"use-client";
import "./style.scss";
// import { Link } from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import PetComponent from "./PetComponent";
import _ from "lodash";
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

export default function StepItem({ step, changeCurrent, loginUser }) {
  const [currentBooking, setCurrentBooking] = useState(null);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userDay, setUserDay] = useState("");
  const [userTime, setUserTime] = useState("");
  const [numberPet, setNumberPet] = useState(1);
  const [pets, setPets] = useState([]);

  //state bắt lỗi
  const [userNameError, setUserNameError] = useState(null);
  const [userPhoneError, setUserPhoneError] = useState(null);
  const [userEmailError, setUserEmailError] = useState(null);
  const [userDayError, setUserDayError] = useState(null);
  const [userTimeError, setUserTimeError] = useState(null);

  useEffect(() => {
    console.log("login", loginUser);
    if (loginUser) {
      setUserName(loginUser?.name);
      setUserEmail(loginUser?.email);
    }
  }, [setUserName, setUserEmail]);

  useEffect(() => {
    let petList = _.cloneDeep(pets);
    for (let i = 0; i < numberPet - pets.length; i++) {
      let pet = {
        petName: "",
        petSpecies: "",
        petType: "",
        petOld: "",
        petGender: true,
        note: "",
      };
      petList.push(pet);
    }
    setPets(petList);
  }, [setPets, numberPet]);

  const handleChangePet = (pets) => {
    setPets(pets);
    console.log("pets", pets);
  };

  const handlePrevClick = () => {
    if (step === 1) {
      changeCurrent(0);
    }
    if (step === 2) {
      changeCurrent(1);
    }
  };
  const disabledDate = (current) => {
    //disable những lịch từ ngày hôm qua
    return current && current < dayjs().endOf("day").subtract(1, "day");
  };
  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleChangeUserPhone = (e) => {
    setUserPhoneError(
      /^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})/.test(e.target.value)
        ? null
        : "** Vui lòng nhập đúng định dạng số điện thoại!"
    );
    setUserPhone(e.target.value);
  };
  const handleChangeUserEmail = (e) => {
    console.log(e.target.value);
    setUserEmailError(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)
        ? null
        : "** Vui lòng nhập đúng định dạng email!"
    );
    console.log(userEmailError);
    setUserEmail(e.target.value);
  };
  const handleChangeUserDay = (date, dateString) => {
    setUserDay(dateString);
  };
  const handleChangeUserTime = (e) => {
    setUserTime(e.target.value);
  };

  const handleAddNewPet = () => {
    setNumberPet(numberPet + 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, userPhone, userEmail, userDay, userTime);
    if (step === 0) {
      let flag = true;
      if (userName === "") {
        setUserNameError("** Không được bỏ trống!");
        flag = false;
      }
      if (userPhone === "") {
        setUserPhoneError("** Không được bỏ trống!");
        flag = false;
      }
      if (userEmail === "") {
        setUserEmailError("** Không được bỏ trống!");
        flag = false;
      }
      if (userDay === "") {
        setUserDayError("** Vui lòng chọn ngày thăm khám!");
        flag = false;
      }
      if (userTime === "") {
        setUserTimeError("** Vui lòng chọn một giờ khám cụ thể!");
        flag = false;
      }
      if (flag) {
        let booking = localStorage.getItem("current_booking");
        if (booking) {
          booking = JSON.parse(booking);
          booking.userName = userName;
          booking.userPhone = userPhone;
          booking.userEmail = userEmail;
          booking.date = userDay;
          booking.time = userTime;
          localStorage.setItem("current_booking", JSON.stringify(booking));
        }
        changeCurrent(1);
      }
    }
    if (step === 1) {
      let booking = localStorage.getItem("current_booking");
      if (booking) {
        booking = JSON.parse(booking);
        booking.pets = _.cloneDeep(pets);
        localStorage.setItem("current_booking", JSON.stringify(booking));
        setCurrentBooking(booking);
      }
      changeCurrent(2);
    }
  };

  if (step === 0) {
    return (
      <form onSubmit={handleSubmit}>
        <h3>Thông tin lịch đặt (Thời gian và thông tin người dùng):</h3>
        <div className="form-row">
          <div className="input-group">
            <label htmlFor="">Họ và tên: </label>
            <input
              type="text"
              placeholder="Nhập tên của bạn"
              value={userName}
              onChange={handleChangeUserName}
            />
            <div className="error">{userNameError}</div>
          </div>
          <div className="input-group">
            <label htmlFor="">Số điện thoại(10 số):</label>
            <input
              type="text"
              placeholder="Nhập số điện thoại của bạn"
              onChange={handleChangeUserPhone}
            />
            <div className="error">{userPhoneError}</div>
          </div>
        </div>
        <div className="form-row">
          <div className="input-group">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Nhập vào email của bạn"
              value={userEmail}
              onChange={handleChangeUserEmail}
            />
            <div className="error">{userEmailError}</div>
          </div>
          <div className="input-group date-time-picker">
            <label htmlFor="">Lựa chọn ngày làm</label>
            <DatePicker
              disabledDate={disabledDate}
              placeholder="Chọn ngày"
              onChange={handleChangeUserDay}
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
                      onChange={handleChangeUserTime}
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
                      onChange={handleChangeUserTime}
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
                      onChange={handleChangeUserTime}
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
    return (
      <form onSubmit={handleSubmit}>
        {pets.map((item, index) => {
          return (
            <PetComponent
              item={item}
              pets={pets}
              setPets={handleChangePet}
              index={index}
            />
          );
        })}
        <hr />
        <button
          className="add-new-pet-btn"
          onClick={handleAddNewPet}
          type="button"
        >
          + Thêm thú cưng
        </button>
        <hr />
        <div className="btn-wrapper">
          <button
            className="btn prev-btn"
            type="button"
            onClick={handlePrevClick}
          >
            {"< Quay về"}
          </button>
          <button className="btn next-btn">{"Tiếp tục >"}</button>
        </div>
      </form>
    );
  }
  if (step === 2) {
    return (
      <form className="confirm-info">
        <h3>Thông tin lịch đặt</h3>
        <div className="table-wrapper">
          <div className="table">
            <div className="table-row">
              <div className="table-col">Loại lịch hẹn</div>
              <div className="table-col">LỊCH KHÁM</div>
            </div>
            <div className="table-row">
              <div className="table-col">Ngày đặt</div>
              <div className="table-col">19/03/2024</div>
              {/* <div className="table-col">{currentBooking.date}</div> */}
            </div>
            <div className="table-row">
              <div className="table-col">Giờ đặt</div>
              <div className="table-col">9:00 - 10:00</div>
              {/* <div className="table-col">{currentBooking.time}</div> */}
            </div>
            <div className="table-row">
              <div className="table-col">Số lượng thú cưng</div>
              <div className="table-col">2</div>
              {/* <div className="table-col">{currentBooking.pets.length}</div> */}
            </div>
          </div>
          <div className="table">
            <div className="table-row">
              <div className="table-col">Họ và tên</div>
              <div className="table-col">Bùi Quang Trưởng</div>
              {/* <div className="table-col">{currentBooking.userName}</div> */}
            </div>
            <div className="table-row">
              <div className="table-col">Số điện thoại</div>
              <div className="table-col">0977354956</div>

              {/* <div className="table-col">{currentBooking.userPhone}</div> */}
            </div>
            <div className="table-row">
              <div className="table-col">Email</div>
              <div className="table-col">buiquangtruong1105@gmail.com</div>
              {/* <div className="table-col">{currentBooking.Email}</div> */}
            </div>
          </div>
        </div>
        <h3>Danh sách thú cưng</h3>
        <div className="table">
          <div className="table-row">
            <div className="table-col">Stt</div>
            <div className="table-col">Tên thú cưng</div>
            <div className="table-col">Chủng loại</div>
            <div className="table-col">Giới tính</div>
            <div className="table-col">Tuổi</div>
            <div className="table-col">Giống loài</div>
            <div className="table-col">Ghi chú</div>
          </div>
          <div className="table-row">
            <div className="table-col">1</div>
            <div className="table-col">Đ</div>
            <div className="table-col">sdfsdf</div>
            <div className="table-col">Đực</div>
            <div className="table-col">10</div>
            <div className="table-col">Chihuahua</div>
            <div className="table-col">Khám định kỳ</div>
          </div>
          {/* {currentBooking.pets.map((pet, index) => {
            return (
              <div className="table-row">
                <div className="table-col">{index + 1}</div>
                <div className="table-col">{pet.petName}</div>
                <div className="table-col">{pet.petSpecies}</div>
                <div className="table-col">{pet.petGender ? "Đực" : "Cái"}</div>
                <div className="table-col">{pet.petOld}</div>
                <div className="table-col">{pet.petType}</div>
                <div className="table-col">{pet.note}</div>
              </div>
            );
          })} */}
        </div>
      </form>
    );
  }
  if (step === 3) {
    return <div>Step 4</div>;
  }
}
