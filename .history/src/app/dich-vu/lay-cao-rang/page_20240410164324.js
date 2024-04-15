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
                Môi trường chăm sóc tốt nhất: Tại Petpals, chúng tôi hiểu rằng
                sự thoải mái và không gây stress cho mẹ chó mèo là rất quan
                trọng để đảm bảo quá trình đẻ suôn sẻ. Chúng tôi tạo ra một môi
                trường thân thiện, ấm cúng và thoải mái, nơi chó mèo mẹ có thể
                tìm thấy sự yên tĩnh và sự bảo vệ để sinh con một cách tự nhiên
                và an toàn.
              </li>
              <li>
                Chăm sóc tận tâm sau đẻ: Dịch vụ đỡ đẻ, hộ sinh tại Petpals
                không chỉ kết thúc khi quá trình đẻ thành công. Chúng tôi cũng
                cung cấp sự hỗ trợ sau sinh tận tâm, bao gồm các lời khuyên chăm
                sóc và dinh dưỡng cho mẹ chó mèo và con non. Chúng tôi luôn sẵn
                lòng giúp bạn xử lý bất kỳ khó khăn nào trong việc nuôi dưỡng và
                chăm sóc thú cưng.
              </li>
            </ul>
          </div>
          <p>
            Hãy để Petpals đồng hành cùng bạn trong hành trình đẻ đáng nhớ của
            chó mèo yêu quý của bạn. Đội ngũ chuyên gia của chúng tôi sẽ đảm bảo
            rằng bạn và chó mèo của bạn nhận được sự chăm sóc tốt nhất trong
            suốt quá trình này.
          </p>
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
