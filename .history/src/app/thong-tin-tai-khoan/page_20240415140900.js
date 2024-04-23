"use client";
import "./style.scss";
import React, { useEffect, useState } from "react";
import {
  UserOutlined,
  BookOutlined,
  LockOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu, DatePicker } from "antd";
import dayjs from "dayjs";
import _, { clone } from "lodash";
import { Pagination } from "antd";
import { toast } from "react-toastify";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Thông tin tài khoản", "1", <UserOutlined />),
  getItem("Quản lý lịch đặt", "sub1", <BookOutlined />, [
    getItem("Lịch chờ khám", "2"),
    getItem("Lịch đã khám", "3"),
    getItem("Lịch đã hủy", "4"),
  ]),
  getItem("Thay đổi mật khẩu", "5", <LockOutlined />),
  getItem("Đăng xuất", "6", <LogoutOutlined />),
];

let loginUser = null;
if (typeof window !== "undefined") {
  loginUser = localStorage.getItem("login-user");
  loginUser = loginUser ? JSON.parse(loginUser) : null;
}

let listBooing = null;
if (typeof window !== "undefined") {
  listBooing = localStorage.getItem("list-booking");
  listBooing = listBooing ? JSON.parse(listBooing) : null;
}

let PBooking = null;
if (listBooing && loginUser) {
  const filteredBookings = listBooing?.filter((booking) => {
    return (
      booking.userId === loginUser.id && booking.bookingStatus === "pending"
    );
  });

  if (filteredBookings.length > 0) {
    PBooking = filteredBookings;
  }
}
let DBooking = null;
if (listBooing && loginUser) {
  const filteredBookings = listBooing?.filter((booking) => {
    return booking.userId === loginUser.id && booking.bookingStatus === "done";
  });

  if (filteredBookings.length > 0) {
    DBooking = filteredBookings;
  }
}

let CBooking = null;
if (listBooing && loginUser) {
  const filteredBookings = listBooing?.filter((booking) => {
    return (
      booking.userId === loginUser.id && booking.bookingStatus === "cancel"
    );
  });

  if (filteredBookings.length > 0) {
    CBooking = filteredBookings;
  }
}
export default function Page() {
  const [current, setCurrent] = useState(1);
  const [currentUser, setCurrentUser] = useState(loginUser);
  const [pagePBcurrent, setPagePBcurrent] = useState(1);
  const [pageDBcurrent, setPageDBcurrent] = useState(1);
  const [pageCBcurrent, setPageCBcurrent] = useState(1);

  const handleChangeName = (e) => {
    console.log(currentUser);
    const currentUserClone = currentUser ? _.cloneDeep(currentUser) : {};
    currentUserClone.name = e.target.value;
    setCurrentUser(currentUserClone);
  };

  const handleChangeEmail = (e) => {
    const currentUserClone = currentUser ? _.cloneDeep(currentUser) : {};
    currentUserClone.email = e.target.value;
    setCurrentUser(currentUserClone);
  };

  const handleChangePhone = (e) => {
    const currentUserClone = currentUser ? _.cloneDeep(currentUser) : {};
    currentUserClone.phone = e.target.value;
    setCurrentUser(currentUserClone);
  };
  const handleChangeGender = (e) => {
    const currentUserClone = currentUser ? _.cloneDeep(currentUser) : {};
    currentUserClone.gender = e.target.value;
    setCurrentUser(currentUserClone);
  };
  const handleChangeBirthDay = (date, dateString) => {
    const currentUserClone = currentUser ? _.cloneDeep(currentUser) : {};
    currentUserClone.birthday = dateString;
    setCurrentUser(currentUserClone);
  };

  const onClick = (e) => {
    if (e.key === "5") {
      window.location.href = "#";
    }
    if (e.key === "6") {
      localStorage.removeItem("login-user");
      window.location.href = "/";
    }
    setCurrent(+e.key);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(currentUser);
    loginUser = _.cloneDeep(currentUser);
    localStorage.setItem("login-user", JSON.stringify(loginUser));

    let listUser = localStorage.getItem("users");
    listUser = listUser ? JSON.parse(listUser) : null;
    listUser = listUser.map((user) => {
      if (user.id === loginUser.id) {
        user = loginUser;
      }
      return user;
    });
    localStorage.setItem("users", JSON.stringify(listUser));
    localStorage.setItem("isSaving", "true");
    window.location.reload();
  };
  useEffect(() => {
    if (localStorage.getItem("isSaving")) {
      toast.success("Lưu dữ liệu thành công!");
    }
  }, []);
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Thông tin tài khoản</p>
      </div>
      <section className="information-section">
        <div className="section-left">
          <div
            className="section-left-heading"
            style={{ display: "flex", alignItems: "center", gap: "20px" }}
          >
            <img src="/img/user_avatar.jpg" alt="" style={{ width: "60px" }} />
            <p>{typeof window !== "undefined" && loginUser.name}</p>
          </div>
          <Menu
            onClick={onClick}
            style={{
              width: 256,
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
        </div>
        <div className="section-right">
          {current === 1 && (
            <>
              <div className="section-right-heading">
                <h2>THÔNG TIN TÀI KHOẢN</h2>
              </div>
              <div className="section-right-content">
                <form onSubmit={handleSubmit}>
                  <div className="content">
                    <div className="input-group">
                      <label htmlFor="">Tên đăng nhập: </label>
                      <input
                        type="text"
                        value={currentUser?.name}
                        onChange={handleChangeName}
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="">Email: </label>
                      <input
                        type="text"
                        value={currentUser?.email}
                        onChange={handleChangeEmail}
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="">Số điện thoại: </label>
                      <input
                        type="text"
                        value={currentUser?.phone}
                        placeholder="Nhập số điện thoại..."
                        onChange={handleChangePhone}
                      />
                    </div>
                    <div className="gender">
                      <p>Giới tính</p>
                      <div className="gender-group">
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                          defaultChecked
                          onChange={handleChangeGender}
                        />
                        <label htmlFor="male">Nam</label>
                      </div>
                      <div className="gender-group">
                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          value="female"
                          onChange={handleChangeGender}
                        />
                        <label htmlFor="female">Nữ</label>
                      </div>
                      <div className="gender-group">
                        <input
                          type="radio"
                          id="other"
                          name="gender"
                          value="other"
                          onChange={handleChangeGender}
                        />
                        <label htmlFor="other">Khác</label>
                      </div>
                    </div>
                    <div className="input-group date-picker">
                      <label htmlFor="">Ngày sinh</label>
                      <DatePicker
                        style={{ width: "221px" }}
                        defaultValue={
                          currentUser?.birthday
                            ? dayjs(currentUser?.birthday, "YYYY-MM-DD")
                            : ""
                        }
                        placeholder="Chọn ngày sinh của bạn"
                        onChange={handleChangeBirthDay}
                      />
                    </div>
                    <button className="save-btn">Lưu dữ liệu</button>
                  </div>
                  <div className="img-edit">
                    <img src="/img/user_avatar.jpg" alt="" />
                    <label
                      htmlFor="choose-file"
                      className="custom-btn-choose-file"
                    >
                      CHỌN ẢNH
                    </label>
                    <input type="file" name="" id="choose-file" />
                  </div>
                </form>
              </div>
            </>
          )}
          {current === 2 && (
            <>
              <div className="section-right-heading">
                <h2>LỊCH CHỜ KHÁM</h2>
              </div>
              <div className="section-right-content">
                {!PBooking && (
                  <div className="no-booking">Hiện chưa có lịch đặt nào</div>
                )}
                {PBooking && (
                  <div className="table">
                    <div className="table-row table-row--brown">
                      <div className="table-col">Stt</div>
                      <div className="table-col">Mã lịch đặt</div>
                      <div className="table-col">Loại hình</div>
                      <div className="table-col">Khách hàng</div>
                      <div className="table-col">Số điện thoại</div>
                      <div className="table-col">Ngày đặt</div>
                      <div className="table-col">Xem chi tiết</div>
                    </div>
                    {PBooking.map((booking, index) => {
                      if (
                        index >= pagePBcurrent * 10 - 10 &&
                        index < pagePBcurrent * 10
                      ) {
                        return (
                          <div className="table-row" key={index}>
                            <div className="table-col">{index + 1}</div>
                            <div className="table-col">{booking.id}</div>
                            <div className="table-col">
                              {booking.type === "datLichKham" && "Khám bệnh"}
                              {booking.type === "datLichSpa" && "Spa-Grooming"}
                              {booking.type === "datLichKs" &&
                                "Khách sạn thú cưng"}
                            </div>
                            <div className="table-col">{booking.userName}</div>
                            <div className="table-col">{booking.userPhone}</div>
                            <div className="table-col">{booking.date}</div>
                            <div className="table-col">
                              <a href={`/chi-tiet-lich-dat/${booking.id}`}>
                                <img src="/icon/mdi_eye_brown.svg" alt="" />
                              </a>
                            </div>
                          </div>
                        );
                      }
                    })}
                    <Pagination
                      defaultCurrent={pagePBcurrent}
                      total={PBooking.length}
                      onChange={(value) => {
                        setPagePBcurrent(value);
                      }}
                      style={{
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "right",
                      }}
                    />
                  </div>
                )}
              </div>
            </>
          )}
          {current === 3 && (
            <>
              <div className="section-right-heading">
                <h2>LỊCH CHỜ KHÁM</h2>
              </div>
              <div className="section-right-content">
                {!DBooking && (
                  <div className="no-booking">Hiện chưa có lịch đặt nào</div>
                )}
                {DBooking && (
                  <div className="table">
                    <div className="table-row table-row--brown">
                      <div className="table-col">Stt</div>
                      <div className="table-col">Mã lịch đặt</div>
                      <div className="table-col">Loại hình</div>
                      <div className="table-col">Khách hàng</div>
                      <div className="table-col">Số điện thoại</div>
                      <div className="table-col">Ngày đặt</div>
                      <div className="table-col">Xem chi tiết</div>
                    </div>
                    {DBooking.map((booking, index) => {
                      if (
                        index >= pageDBcurrent * 10 - 10 &&
                        index < pageDBcurrent * 10
                      ) {
                        return (
                          <div className="table-row" key={index}>
                            <div className="table-col">{index + 1}</div>
                            <div className="table-col">{booking.id}</div>
                            <div className="table-col">
                              {booking.type === "datLichKham" && "Khám bệnh"}
                              {booking.type === "datLichSpa" && "Spa-Grooming"}
                              {booking.type === "datLichKS" &&
                                "Khách sạn thú cưng"}
                            </div>
                            <div className="table-col">{booking.userName}</div>
                            <div className="table-col">{booking.userPhone}</div>
                            <div className="table-col">{booking.date}</div>
                            <div className="table-col">
                              <a href={`/chi-tiet-lich-dat/${booking.id}`}>
                                <img src="/icon/mdi_eye_brown.svg" alt="" />
                              </a>
                            </div>
                          </div>
                        );
                      }
                    })}
                    <Pagination
                      defaultCurrent={pageDBcurrent}
                      total={DBooking.length}
                      onChange={(value) => {
                        setPageDBcurrent(value);
                      }}
                      style={{
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "right",
                      }}
                    />
                  </div>
                )}
              </div>
            </>
          )}
          {current === 4 && (
            <>
              <div className="section-right-heading">
                <h2>LỊCH CHỜ KHÁM</h2>
              </div>
              <div className="section-right-content">
                {!CBooking && (
                  <div className="no-booking">Hiện chưa có lịch đặt nào</div>
                )}
                {CBooking && (
                  <div className="table">
                    <div className="table-row table-row--brown">
                      <div className="table-col">Stt</div>
                      <div className="table-col">Mã lịch đặt</div>
                      <div className="table-col">Loại hình</div>
                      <div className="table-col">Khách hàng</div>
                      <div className="table-col">Số điện thoại</div>
                      <div className="table-col">Ngày đặt</div>
                      <div className="table-col">Xem chi tiết</div>
                    </div>
                    {CBooking.map((booking, index) => {
                      if (
                        index >= pageCBcurrent * 10 - 10 &&
                        index < pageCBcurrent * 10
                      ) {
                        return (
                          <div className="table-row" key={index}>
                            <div className="table-col">{index + 1}</div>
                            <div className="table-col">{booking.id}</div>
                            <div className="table-col">
                              {booking.type === "datLichKham" && "Khám bệnh"}
                              {booking.type === "datLichSpa" && "Spa-Grooming"}
                              {booking.type === "datLichKS" &&
                                "Khách sạn thú cưng"}
                            </div>
                            <div className="table-col">{booking.userName}</div>
                            <div className="table-col">{booking.userPhone}</div>
                            <div className="table-col">{booking.date}</div>
                            <div className="table-col">
                              <a href={`/chi-tiet-lich-dat/${booking.id}`}>
                                <img src="/icon/mdi_eye_brown.svg" alt="" />
                              </a>
                            </div>
                          </div>
                        );
                      }
                    })}
                    <Pagination
                      defaultCurrent={pageCBcurrent}
                      total={CBooking.length}
                      onChange={(value) => {
                        setPageCBcurrent(value);
                      }}
                      style={{
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "right",
                      }}
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
