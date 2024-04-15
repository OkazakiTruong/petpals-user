import React from "react";

export default function StepItem({ step }) {
  if (step === 0) {
    return (
      <form>
        <h3>Thông tin lịch đặt (Thời gian và thông tin người dùng):</h3>
        <div className="input-group">
          <label htmlFor="">Họ và tên</label>
          <input type="text" placeholder="Nhập tên của bạn" />
        </div>
        <div className="input-group">
          <label htmlFor="">Số điện thoại(10 số)</label>
          <input type="text" placeholder="Nhập tên của bạn" />
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
