"use client";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { Modal } from "antd";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export default function page({ params }) {
  const [bookingInfo, setBookingInfo] = useState(null);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(
    "Bạn có chắc chắn muốn hủy lịch hẹn không?"
  );
  const [confirmCode, setConfirmCode] = useState("");
  const [confirmCodeErr, setConfirmCodeErr] = useState("");
  const [confirmCodeSendEmail, setConfirmCodeSendEmail] = useState(null);
  const formRef = useRef();

  const showModal = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    setConfirmCode(e.target.value);
  };

  const handleConfirm = (e) => {
    if (confirmCode === "") {
      setConfirmCodeErr("** Vui lòng điền mã");
    } else {
      showModal();
    }
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const handleSendCode = () => {
    let code = uuidv4();
    setConfirmCodeSendEmail(code);
    if (confirmCodeSendEmail) {
      emailjs
        .sendForm("service_oula686", "template_yjjbf5u", formRef.current, {
          publicKey: "hsekb3pZF4Lvcwb80",
        })
        .then(
          () => {
            toast.success("Đã gửi mã xác nhận đến email của bạn!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };
  useEffect(() => {
    let listBooking = localStorage.getItem("list-booking");
    listBooking = listBooking ? JSON.parse(listBooking) : null;
    if (listBooking) {
      listBooking.map((booking) => {
        if (booking.id === params.id) {
          setBookingInfo(booking);
        }
      });
    }
    console.log(bookingInfo);
  }, [setBookingInfo]);

  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Thông tin lịch đặt</p>
      </div>
      <Modal
        title="XÁC NHẬN HỦY LỊCH HẸN !"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="Xác nhận"
        cancelText="Hủy"
      >
        <p>{modalText}</p>
      </Modal>
      <form style={{ display: "none" }} ref={formRef}>
        <input type="text" name="code" value={confirmCodeSendEmail} />
        <input type="text" name="user-email" value={bookingInfo?.userEmail} />
      </form>
      <div className="section-heading">THÔNG TIN LỊCH ĐẶT</div>
      <div className="information-wrapper">
        {bookingInfo?.type === "datLichKham" && (
          <>
            <h3>Thông tin lịch đặt</h3>
            <div className="table-wrapper pet-normal">
              <div className="table">
                <div className="table-row table-row--brown">
                  <div className="table-col">Mã lịch hẹn</div>
                  <div className="table-col">{bookingInfo?.id}</div>
                </div>
                <div className="table-row ">
                  <div className="table-col">Loại lịch hẹn</div>
                  <div className="table-col">
                    {bookingInfo.type === "datLichKham" && "LỊCH KHÁM"}
                    {bookingInfo.type === "datLichKs" && "KHÁCH SẠN THÚ CƯNG"}
                    {bookingInfo.type === "datLichSpa" && "SPA-GROOMING"}
                  </div>
                </div>
                <div className="table-row table-row--brown">
                  <div className="table-col">Trạng thái</div>
                  <div className="table-col">
                    {bookingInfo?.bookingStatus === "pending" && "Đợi khám"}
                    {bookingInfo?.bookingStatus === "done" && "Đã khám"}
                    {bookingInfo?.bookingStatus === "cancel" && "Đã hủy"}
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-col">Ngày đặt</div>
                  <div className="table-col">{bookingInfo?.date}</div>
                </div>
                <div className="table-row table-row--brown">
                  <div className="table-col">Giờ đặt</div>
                  <div className="table-col">{bookingInfo?.time}</div>
                </div>
                <div className="table-row ">
                  <div className="table-col">Số lượng thú cưng</div>
                  <div className="table-col">{bookingInfo?.pets?.length}</div>
                </div>
              </div>
              <div className="table">
                <div className="table-row table-row--brown">
                  <div className="table-col">Họ và tên</div>
                  <div className="table-col">{bookingInfo?.userName}</div>
                </div>
                <div className="table-row">
                  <div className="table-col">Số điện thoại</div>
                  <div className="table-col">{bookingInfo?.userPhone}</div>
                </div>
                <div className="table-row table-row--brown">
                  <div className="table-col">Email</div>
                  <div className="table-col">{bookingInfo?.userEmail}</div>
                </div>
              </div>
            </div>
            <h3>Danh sách thú cưng</h3>
            <div className="table pet-normal">
              <div className="table-row table-row--brown">
                <div className="table-col">Stt</div>
                <div className="table-col">Tên thú cưng</div>
                <div className="table-col">Chủng loại</div>
                <div className="table-col">Giới tính</div>
                <div className="table-col">Tuổi</div>
                <div className="table-col">Giống loài</div>
                <div className="table-col">Ghi chú</div>
              </div>
              {bookingInfo?.pets.map((pet, index) => {
                return (
                  <div className="table-row">
                    <div className="table-col">{index + 1}</div>
                    <div className="table-col">{pet?.petName}</div>
                    <div className="table-col">{pet?.petSpecies}</div>
                    <div className="table-col">
                      {pet?.petGender ? "Đực" : "Cái"}
                    </div>
                    <div className="table-col">{pet?.petOld}</div>
                    <div className="table-col">{pet?.petType}</div>
                    <div className="table-col">{pet?.note}</div>
                  </div>
                );
              })}
            </div>
            {bookingInfo.bookingStatus === "pending" && (
              <div className="btn-wrapper">
                <button>Hủy lịch đặt</button>
              </div>
            )}
          </>
        )}
        {bookingInfo?.type === "datLichSpa" && (
          <>
            <h3>Thông tin lịch đặt</h3>
            <div className="table-wrapper pet-spa">
              <div className="table">
                <div className="table-row table-row--brown">
                  <div className="table-col">Mã lịch hẹn</div>
                  <div className="table-col">{bookingInfo?.id}</div>
                </div>
                <div className="table-row ">
                  <div className="table-col">Loại lịch hẹn</div>
                  <div className="table-col">
                    {bookingInfo.type === "datLichKham" && "LỊCH KHÁM"}
                    {bookingInfo.type === "datLichKs" && "KHÁCH SẠN THÚ CƯNG"}
                    {bookingInfo.type === "datLichSpa" && "SPA-GROOMING"}
                  </div>
                </div>
                <div className="table-row table-row--brown">
                  <div className="table-col">Trạng thái</div>
                  <div className="table-col">
                    {bookingInfo?.bookingStatus === "pending" && "Đợi khám"}
                    {bookingInfo?.bookingStatus === "done" && "Đã khám"}
                    {bookingInfo?.bookingStatus === "cancel" && "Đã hủy"}
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-col">Ngày đặt</div>
                  <div className="table-col">{bookingInfo?.date}</div>
                </div>
                <div className="table-row table-row--brown">
                  <div className="table-col">Giờ đặt</div>
                  <div className="table-col">{bookingInfo?.time}</div>
                </div>
                <div className="table-row ">
                  <div className="table-col">Số lượng thú cưng</div>
                  <div className="table-col">{bookingInfo?.pets?.length}</div>
                </div>
              </div>
              <div className="table">
                <div className="table-row table-row--brown">
                  <div className="table-col">Họ và tên</div>
                  <div className="table-col">{bookingInfo?.userName}</div>
                </div>
                <div className="table-row">
                  <div className="table-col">Số điện thoại</div>
                  <div className="table-col">{bookingInfo?.userPhone}</div>
                </div>
                <div className="table-row table-row--brown">
                  <div className="table-col">Email</div>
                  <div className="table-col">{bookingInfo?.userEmail}</div>
                </div>
              </div>
            </div>
            <h3>Danh sách thú cưng</h3>
            <div className="table pet-spa">
              <div className="table-row table-row--brown">
                <div className="table-col">Stt</div>
                <div className="table-col">Tên thú cưng</div>
                <div className="table-col">Chủng loại</div>
                <div className="table-col">Giới tính</div>
                <div className="table-col">Tuổi</div>
                <div className="table-col">Giống loài</div>
                <div className="table-col">Loại dịch vụ</div>
                <div className="table-col">Ghi chú</div>
              </div>
              {bookingInfo?.pets.map((pet, index) => {
                return (
                  <div className="table-row">
                    <div className="table-col">{index + 1}</div>
                    <div className="table-col">{pet?.petName}</div>
                    <div className="table-col">{pet?.petSpecies}</div>
                    <div className="table-col">
                      {pet?.petGender ? "Đực" : "Cái"}
                    </div>
                    <div className="table-col">{pet?.petOld}</div>
                    <div className="table-col">{pet?.petType}</div>
                    <div className="table-col">{pet?.petService}</div>
                    <div className="table-col">{pet?.note}</div>
                  </div>
                );
              })}
            </div>
            {bookingInfo.bookingStatus === "pending" && (
              <div className="btn-wrapper">
                <button>Hủy lịch đặt</button>
              </div>
            )}
          </>
        )}
        {bookingInfo?.type === "datLichKs" && (
          <>
            <h3>Thông tin lịch đặt</h3>
            <div className="table-wrapper pet-hotel">
              <div className="table">
                <div className="table-row table-row--brown">
                  <div className="table-col">Mã lịch hẹn</div>
                  <div className="table-col">{bookingInfo?.id}</div>
                </div>
                <div className="table-row ">
                  <div className="table-col">Loại lịch hẹn</div>
                  <div className="table-col">
                    {bookingInfo.type === "datLichKham" && "LỊCH KHÁM"}
                    {bookingInfo.type === "datLichKs" && "KHÁCH SẠN THÚ CƯNG"}
                    {bookingInfo.type === "datLichSpa" && "SPA-GROOMING"}
                  </div>
                </div>
                <div className="table-row table-row--brown">
                  <div className="table-col">Trạng thái</div>
                  <div className="table-col">
                    {bookingInfo?.bookingStatus === "pending" && "Đợi khám"}
                    {bookingInfo?.bookingStatus === "done" && "Đã khám"}
                    {bookingInfo?.bookingStatus === "cancel" && "Đã hủy"}
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-col">Ngày đặt</div>
                  <div className="table-col">{bookingInfo?.date}</div>
                </div>
                <div className="table-row table-row--brown">
                  <div className="table-col">Giờ đặt</div>
                  <div className="table-col">{bookingInfo?.time}</div>
                </div>
                <div className="table-row">
                  <div className="table-col">Ngày đón</div>
                  <div className="table-col">{bookingInfo?.dateBack}</div>
                </div>
                <div className="table-row  table-row--brown">
                  <div className="table-col">Số lượng thú cưng</div>
                  <div className="table-col">{bookingInfo?.pets?.length}</div>
                </div>
              </div>
              <div className="table">
                <div className="table-row table-row--brown">
                  <div className="table-col">Họ và tên</div>
                  <div className="table-col">{bookingInfo?.userName}</div>
                </div>
                <div className="table-row ">
                  <div className="table-col">Số điện thoại</div>
                  <div className="table-col">{bookingInfo?.userPhone}</div>
                </div>
                <div className="table-row table-row--brown">
                  <div className="table-col">Email</div>
                  <div className="table-col">{bookingInfo?.userEmail}</div>
                </div>
              </div>
            </div>
            <h3>Danh sách thú cưng</h3>
            <div className="table pet-hotel">
              <div className="table-row table-row--brown">
                <div className="table-col">Stt</div>
                <div className="table-col">Tên thú cưng</div>
                <div className="table-col">Chủng loại</div>
                <div className="table-col">Giới tính</div>
                <div className="table-col">Tuổi</div>
                <div className="table-col">Giống loài</div>
                <div className="table-col">Hình thức cho ăn</div>
                <div className="table-col">Ghi chú</div>
              </div>
              {bookingInfo?.pets.map((pet, index) => {
                return (
                  <div className="table-row">
                    <div className="table-col">{index + 1}</div>
                    <div className="table-col">{pet?.petName}</div>
                    <div className="table-col">{pet?.petSpecies}</div>
                    <div className="table-col">
                      {pet?.petGender ? "Đực" : "Cái"}
                    </div>
                    <div className="table-col">{pet?.petOld}</div>
                    <div className="table-col">{pet?.petType}</div>
                    <div className="table-col">{pet?.petFeed}</div>
                    <div className="table-col">{pet?.note}</div>
                  </div>
                );
              })}
            </div>
            {bookingInfo.bookingStatus === "pending" && (
              <>
                <hr style={{ margin: "30px 0" }} />
                <div className="btn-wrapper">
                  <button
                    className="btn btn-type-1 btn-cancel"
                    onClick={handleSendCode}
                  >
                    Hủy lịch đặt
                  </button>
                  <div className="confirm-wrapper">
                    <p>
                      <b>Nhập mã được gửi về email của bạn</b>
                    </p>
                    <input
                      type="text"
                      placeholder="Nhập vào mã xác nhận hủy..."
                      onChange={handleChange}
                      value={confirmCode}
                    />
                    <div className="err">{confirmCodeErr}</div>
                    <div className="btn-confirm-wrapper">
                      <button className="btn btn-type-2">Hủy</button>
                      <button
                        className="btn btn-type-1"
                        onClick={handleConfirm}
                      >
                        Hủy lịch đặt
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </main>
  );
}
