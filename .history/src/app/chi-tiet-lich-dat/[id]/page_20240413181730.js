"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";

export default function page({ params }) {
  const [bookingInfo, setBookingInfo] = useState(null);
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
                <div className="table-row ">
                  <div className="table-col">Giờ đặt</div>
                  <div className="table-col">{bookingInfo?.time}</div>
                </div>
                <div className="table-row table-row--brown">
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
      </div>
    </main>
  );
}
