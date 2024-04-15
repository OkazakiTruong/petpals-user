import React from "react";
import "./style.scss";

export default function page() {
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Dịch vụ</p>
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Lấy cao răng</p>
      </div>
      <section className="service-section">
        <div className="section-heading">DỊCH VỤ LẤY CAO RĂNG</div>
        <div className="introduce-service">
          <div className="service-img">
            <img src="/img/service-img/cap_cuu_247.jpg" alt="" />
          </div>
          <div className="information-table">
            <div className="information-heading">
              <h2>THÔNG TIN LIÊN HỆ</h2>
              <p>Liên hệ với chúng tôi để được hỗ trợ một cách sớm nhất nhé!</p>
            </div>
            <div className="table">
              <div className="row">
                <div className="heading">Địa Chỉ:</div>
                <div className="content">
                  Số 96 Định Công, Hoàng Mai, Hà Nội
                </div>
              </div>
              <div className="row">
                <div className="heading">Hotline:</div>
                <div className="content">0977354956</div>
              </div>
              <div className="row">
                <div className="heading">Email:</div>
                <div className="content">petpals@gmail.com</div>
              </div>
              <div className="row">
                <div className="heading">Website:</div>
                <div className="content">www.petpals.com</div>
              </div>
              <div className="row">
                <div className="heading">Fanpage:</div>
                <div className="content">fb.com/Petpals</div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-content">
          <p>
            Răng thú cưng ố vàng làm mất thẩm mỹ, mảng bám làm miệng có mùi hôi,
            viêm lợi, sâu răng, và khó khăn trong việc ăn uống? Đừng lo, Petpals
            đã có giải pháp lý tưởng cho thú cưng của bạn!
          </p>
          <p>
            Đến với Petpals, thú cưng sẽ được tận hưởng những lợi ích đáng kể
            của việc lấy cao răng:
          </p>
          <div>
            <ul>
              <li>
                Hạn chế các bệnh về răng, lợi cho các thượng đế: Bằng cách lấy
                cao răng định kỳ, chó mèo của bạn sẽ được bảo vệ khỏi các bệnh
                răng miệng, từ viêm lợi đến sâu răng, giúp chúng duy trì sức
                khỏe toàn diện.
              </li>
              <li>
                Giảm bớt mùi hôi miệng: Mảng bám trên răng chó mèo là nguồn gốc
                gây mùi hôi miệng khó chịu. Chúng tôi sử dụng công nghệ hiện đại
                để loại bỏ mảng bám, giúp hơi thở của thú cưng thêm thơm mát và
                tươi mới.
              </li>
              <li>
                Nâng cao tính thẩm mỹ với hàm răng trắng sáng: Răng trắng sáng
                là một yếu tố quan trọng trong vẻ đẹp của chó mèo. Dịch vụ lấy
                cao răng tại Petpals sẽ giúp loại bỏ tình trạng răng ố vàng,
                mang đến cho thú cưng hàm răng sáng bóng hơn.
              </li>
            </ul>
          </div>
          <p>
            Chúng tôi thực hiện quy trình lấy cao răng theo 3 bước nghiêm ngặt:
          </p>
          <div>
            <ul>
              <li>
                Kiểm tra sức khỏe lâm sàng: Các bác sĩ tại Petpals sẽ kiểm tra
                sức khỏe tổng quát của thú cưng, đảm bảo chúng đủ sức khỏe để
                tiến hành quy trình lấy cao răng. Đồng thời, chúng tôi cũng phát
                hiện và điều trị các bệnh khác nếu có.
              </li>
              <li>
                Giảm bớt mùi hôi miệng: Mảng bám trên răng chó mèo là nguồn gốc
                gây mùi hôi miệng khó chịu. Chúng tôi sử dụng công nghệ hiện đại
                để loại bỏ mảng bám, giúp hơi thở của thú cưng thêm thơm mát và
                tươi mới.
              </li>
              <li>
                Nâng cao tính thẩm mỹ với hàm răng trắng sáng: Răng trắng sáng
                là một yếu tố quan trọng trong vẻ đẹp của chó mèo. Dịch vụ lấy
                cao răng tại Petpals sẽ giúp loại bỏ tình trạng răng ố vàng,
                mang đến cho thú cưng hàm răng sáng bóng hơn.
              </li>
            </ul>
          </div>
          <p>
            Liên hệ với Petpals chi nhánh gần nhất ngay hôm nay để biết thêm
            thông tin chi tiết và đặt lịch hỗ trợ đỡ đẻ cho chó mèo của bạn.
            Chúng tôi cam kết mang đến sự an toàn và thành công cho quá trình đẻ
            của thú cưng của bạn.
          </p>
        </div>
      </section>
    </main>
  );
}
