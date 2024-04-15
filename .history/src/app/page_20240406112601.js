import Link from "next/link";
import "./style.scss";
import { BookingItem } from "@/components/BookingItem/BookingItem";
import { Carousel } from "@/components/Carousel/Carousel";
import { ServiceItem } from "@/components/ServiceItem/ServiceItem";
import { DoctorItem } from "@/components/DoctorItem/DoctorItem";
import { ImgStore } from "@/components/ImgStore/ImgStore";
import { ArticleList } from "@/components/ArticleList/ArticleList";
const listBookingItem = [
  {
    img: "/img/booking-section/kham.png",
    name: "Đặt Lịch Khám",
    title:
      "Thú cưng của bạn khi tới bệnh viện sẽ nhận được quy trình chăm sóc tiêu chuẩn quốc tế với các bước kiểm tra, xét nghiệm, chẩn đoán điều trị rõ ràng.",
    link: "#",
  },
  {
    img: "/img/booking-section/spa.png",
    name: "Đặt Lịch Spa-Grooming",
    title:
      "Thú cưng của bạn khi tới bệnh viện sẽ nhận được quy trình chăm sóc tiêu chuẩn quốc tế với các bước kiểm tra, xét nghiệm, chẩn đoán điều trị rõ ràng.",
    link: "#",
  },
  {
    img: "/img/booking-section/khachsan.png",
    name: "Đặt Lịch Khách Sạn Thú Cưng",
    title:
      "Thú cưng của bạn khi tới bệnh viện sẽ nhận được quy trình chăm sóc tiêu chuẩn quốc tế với các bước kiểm tra, xét nghiệm, chẩn đoán điều trị rõ ràng.",
    link: "#",
  },
];
const listArticle = [
  {
    img: "/img/articles/article-1.jpg",
    date: "20/04/2024",
    author: "Bùi Quang Trưởng",
    title: "Bật mí cho bạn cách chăm sóc mèo con chu đáo nhất",
    detail:
      "Quá trình nuôi cũng như là chăm sóc thú cưng là quá trình diễn ra trong cả một thời gian dài. Và quá trình nuôi mèo con với nh...",
    link: "#",
  },
  {
    img: "/img/articles/article-3.jpg",
    date: "08/12/2023",
    author: "Bùi Quang Trưởng",
    title: "Top các cách huấn luyện chó con hiệu quả",
    detail:
      "Chó là vật nuôi trung thành. Khi mới là chó con, chúng đang phát triển tư duy, dễ dàng tiếp thu những điều bạn dạy chúng. Vì thế nếu biết cách huấn...",
    link: "#",
  },
  {
    img: "/img/articles/article-5.jpg",
    date: "01/10/2023",
    author: "Bùi Quang Trưởng",
    title: "Mách bạn cách diệt ve chó tại nhà hiệu quả",
    detail:
      "Ve chó (rận chó), bọ chét đang là nỗi đau đầu của nhiều gia đình, ảnh hưởng đến sức khỏe thú cưng và gia đình. Vì vậy, tiêu diệt ...",
    link: "#",
  },
  {
    img: "/img/articles/article-8.jpg",
    date: "11/09/2023",
    author: "Bùi Quang Trưởng",
    title: "Cách dạy chó đi vệ sinh đúng chỗ",
    detail:
      "Chó từ lâu đã là vật nuôi thân quan và trở thành một người bạn thân thiết trong đời sống của loài người chúng ta. Trải qua hàng ngàn năm sinh sống...",
    link: "#",
  },
];
const listArticleFull = [
  {
    img: "/img/articles/article-1.jpg",
    date: "20/04/2024",
    author: "Bùi Quang Trưởng",
    title: "Bật mí cho bạn cách chăm sóc mèo con chu đáo nhất",
    detail:
      "Quá trình nuôi cũng như là chăm sóc thú cưng là quá trình diễn ra trong cả một thời gian dài. Và quá trình nuôi mèo con với nh...",
    link: "#",
  },
  {
    img: "/img/articles/article-3.jpg",
    date: "08/12/2023",
    author: "Bùi Quang Trưởng",
    title: "Top các cách huấn luyện chó con hiệu quả",
    detail:
      "Chó là vật nuôi trung thành. Khi mới là chó con, chúng đang phát triển tư duy, dễ dàng tiếp thu những điều bạn dạy chúng. Vì thế nếu biết cách huấn...",
    link: "#",
  },
  {
    img: "/img/articles/article-5.jpg",
    date: "01/10/2023",
    author: "Bùi Quang Trưởng",
    title: "Mách bạn cách diệt ve chó tại nhà hiệu quả",
    detail:
      "Ve chó (rận chó), bọ chét đang là nỗi đau đầu của nhiều gia đình, ảnh hưởng đến sức khỏe thú cưng và gia đình. Vì vậy, tiêu diệt ...",
    link: "#",
  },
  {
    img: "/img/articles/article-8.jpg",
    date: "11/09/2023",
    author: "Bùi Quang Trưởng",
    title: "Cách dạy chó đi vệ sinh đúng chỗ",
    detail:
      "Chó từ lâu đã là vật nuôi thân quan và trở thành một người bạn thân thiết trong đời sống của loài người chúng ta. Trải qua hàng ngàn năm sinh sống...",
    link: "#",
  },
  {
    img: "/img/articles/article-9.jpg",
    date: "11/09/2023",
    author: "Bùi Quang Trưởng",
    title: "Chia sẻ cho bạn 10 lệnh huấn luyện chó hiệu quả nhất ",
    detail:
      "Nếu bạn có một chú cún cưng, ngoài việc quan tâm chăm sóc về dinh dưỡng ra thì cần phải lưu tâm trong quá trình huấn luyê...",
    link: "#",
  },
  {
    img: "/img/articles/article-10.jpg",
    date: "10/08/2023",
    author: "Bùi Quang Trưởng",
    title:
      "Nguyên tắc bảo vệ sức khỏe thú cưng toàn diện SEN nào cũng cần biết",
    detail:
      "Nuôi dưỡng, chăm sóc thú cưng là việc không hề đơn giản! Nếu bạn dành rất nhiều tình yêu cho thú cưng vậy thì đừng quên ...",
    link: "#",
  },
  {
    img: "/img/articles/article-11.jpg",
    date: "06/03/2023",
    author: "Bùi Quang Trưởng",
    title: "Mèo chửa mấy tháng thì đẻ và những lưu ý khi chăm sóc chúng",
    detail:
      "Mèo là thú cưng yêu thích của nhiều người. Khi mèo mang thai, hầu hết chúng đều có thể tự sinh con mà không cần có sự can...",
    link: "#",
  },
  {
    img: "/img/articles/article-14.jpg",
    date: "11/05/2023",
    author: "Bùi Quang Trưởng",
    title: "Bệnh nấm chó mèo là gì? Giải pháp cho bệnh nấm chó mèo",
    detail:
      "Nấm chó mèo ở thú cưng là một loại bệnh khá phổ biến. Khi vị trí bị nấm mới xuất hiện sẽ không có ảnh hưởng mấy nhưng thời gi...",
    link: "#",
  },
  {
    img: "/img/articles/article-16.jpg",
    date: "10/05/2023",
    author: "Bùi Quang Trưởng",
    title: "Lý giải nguyên nhân tại sao chó bỏ ăn",
    detail:
      "Chó là vật nuôi được nhiều gia đình chọn lựa. Nó được coi như một thành viên trong nhà nên khi chó bỏ ăn, không ít gia đình lo lắng, muốn đưa chó đi...",
    link: "#",
  },
  {
    img: "/img/articles/article-18.jpg",
    date: "10/03/2023",
    author: "Bùi Quang Trưởng",
    title: "Mèo Bị Co Giật: Nguyên Nhân, Triệu Chứng và Cách Điều Trị",
    detail:
      "Mèo bị co giật không chỉ là một biểu hiện đáng lo ngại, mà còn là một dấu hiệu cảnh báo về sức khỏe thú cưng của bạn...",
    link: "#",
  },
  {
    img: "/img/articles/article-20.jpg",
    date: "10/02/2023",
    author: "Bùi Quang Trưởng",
    title: "Tìm mua thuốc trị tiêu chảy cho mèo hiệu quả nhất năm 2022",
    detail:
      "Những con vật nuôi trong nhà như mèo thường gặp các triệu chứng tiêu chảy, đi phân lỏng có mùi tanh hôi khi chúng nhưn...",
    link: "#",
  },
  {
    img: "/img/articles/article-21.jpg",
    date: "09/01/2023",
    author: "Bùi Quang Trưởng",
    title: "Tiêm phòng thú cưng và trọn bộ những điều cần lưu ý!",
    detail:
      "Thú cưng cần được tiêm phòng những loại vaccine nào? Để bảo vệ thú cưng luôn khỏe mạnh và phòng chống được các bệnh ng...",
    link: "#",
  },
  {
    img: "/img/articles/article-19.jpg",
    date: "12/12/2022",
    author: "Bùi Quang Trưởng",
    title: "Tại sao cần thiến mèo đực? Cách chăm sóc mèo đực sau thiến",
    detail:
      "Triệt sản hay thiến mèo là một trong những phương pháp mà người nuôi thú cưng thường sử dụng để bảo vệ cho mèo cũn...",
    link: "#",
  },
  {
    img: "/img/articles/article-22.jpg",
    date: "01/12/2022",
    author: "Bùi Quang Trưởng",
    title: "Những lợi ích to lớn khi triệt sản mèo đực có thể bạn chưa biết",
    detail:
      "Đối với những người nuôi mèo chắc hẳn không còn xa lạ gì với cụm từ triệt sản cho mèo, đặc biệt là các bạn mèo đực. Việc na...",
    link: "#",
  },
  {
    img: "/img/articles/article-6.jpg",
    date: "11/11/2022",
    author: "Bùi Quang Trưởng",
    title: "Các xử lý khi chó mèo bị tiêu chảy?",
    detail:
      "Trong cuộc sống hàng ngày thi con người như động vật việc hệ tiêu hóa gặp vấn đề...",
    link: "#",
  },
];

export default function Home() {
  return (
    <main>
      <section className="banner">
        <div className="overlay"></div>
        <div className="banner-content">
          <h2 className="banner-heading">HỆ THỐNG THÚ Y PETPALS</h2>
          <h2 className="banner-main-heading">
            CHỮA LÀNH <br /> TỪ TRÁI TIM
          </h2>
          <div className="group-btn">
            <Link href="/" className="banner-button">
              <span className="icon">
                <img src="/icon/el_group.svg" alt="" className="el_group" />
                <img
                  src="/icon/el_group_brown.svg"
                  alt=""
                  className="el_group_brown"
                />
              </span>
              Về chúng tôi
            </Link>
            <Link href="/" className="banner-button">
              <span className="icon">
                <img src="/icon/ic_baseline-phone.svg" alt="" />
              </span>
              Liên hệ
            </Link>
          </div>
        </div>
      </section>
      <section className="booking-option">
        <h2 className="section-heading">ĐẶT LỊCH CHO THÚ CƯNG CỦA BẠN</h2>
        <div className="booking-list">
          {listBookingItem.map((item, index) => {
            return <BookingItem key={index} item={item} />;
          })}
        </div>
      </section>
      <section className="about-section">
        <h2 className="section-heading">VÌ SAO NÊN CHỌN PETPALS ?</h2>
        <div className="section-content">
          <div className="left"></div>
          <div className="right">
            <div className="content">
              <p>
                Petpals là hệ thống bệnh viện thú y chất lượng, uy tín TOP đầu
                Hà Nội. Hệ thống của chúng tôi đã phục vụ hơn 20.000 khách hàng
                với sự tín nhiệm và tin tưởng rất lớn.
              </p>
              <p>
                Thú cưng của bạn khi tới bệnh viện sẽ nhận được quy trình chăm
                sóc tiêu chuẩn quốc tế với các bước kiểm tra, xét nghiệm, chẩn
                đoán điều trị rõ ràng. Nhân viên của Petpals sẽ luôn duy trì
                kênh liên lạc với bạn để cập nhật thường xuyên, liên tục tình
                hình của các bạn thú cưng, chắc chắn rằng bạn sẽ an tâm khi gửi
                gắm thú cưng của cho chúng tôi.
              </p>
              <p>
                Petpals có đội ngũ bác sĩ thú y tay nghề cao, chuyên môn tốt,
                giàu kinh nghiệm, luôn đề cao lương tâm, tính trách nhiệm trong
                công việc và rất yêu thương thú cưng. Cùng với hệ thống máy móc
                thiết bị hiện đại phục vụ cho chẩn đoán và điều trị bệnh.
              </p>
              <p>
                Với slogan “Chữa lành từ trái tim” chúng tôi chăm sóc thú cưng
                của bạn tận tâm với tất cả trái tim mình.
              </p>
              <h3>SỨ MỆNH CỦA CHÚNG TÔI</h3>
              <div className="mission-item">
                <img src="/icon/material-symbols_pets.svg" alt="" />
                <p>
                  Petpals luôn mang đến những dịch vụ chất lượng, uy tín, chuyên
                  nghiệp. Là địa chỉ tin cậy để khách hàng đồng hành trong hành
                  trình nuôi dưỡng, yêu thương và chăm sóc các bạn thú cưng của
                  mình.
                </p>
              </div>
              <div className="mission-item">
                <img src="/icon/material-symbols_pets.svg" alt="" />
                <p>
                  Coi trọng phát triển nguồn nhân lực cũng như nghĩa vụ đối với
                  cộng đồng và xã hội là nhiệm vụ không thể tách rời với việc
                  gia tăng giá trị của cổ đông.
                </p>
              </div>
              <div className="mission-item">
                <img src="/icon/material-symbols_pets.svg" alt="" />
                <p>
                  Xây dựng môi trường làm việc văn minh, lịch sự, tử tế, yêu
                  thương, trách nhiệm.
                </p>
              </div>
            </div>
            <div className="about-img">
              <div className="overlay"></div>
              <div className="img-content">
                <div className="img-content-item">
                  <img src="/icon/raphael_customer.svg" alt="" />
                  <h3>98%</h3>
                  <p>Khách hàng hài lòng</p>
                </div>
                <div className="img-content-item">
                  <img src="/icon/solar_hospital-bold.svg" alt="" />
                  <h3>4+</h3>
                  <p>Năm kinh nghiệm</p>
                </div>
                <div className="img-content-item">
                  <img src="/icon/ic_baseline-pets.svg" alt="" />
                  <h3>20K+</h3>
                  <p>Pet được chăm sóc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-service-section">
        <h2 className="section-heading">DỊCH VỤ CHÚNG TÔI CUNG CẤP</h2>
        <div className="our-service-container">
          <Carousel type="service" />
        </div>
      </section>
      <section className="doctor-section">
        <h2 className="section-heading">ĐỘI NGŨ BÁC SĨ CỦA CHÚNG TÔI</h2>
        <div className="doctor-container">
          <Carousel type="doctor" />
        </div>
      </section>
      <section className="store-img">
        <h2 className="section-heading">BỘ SƯU TẬP HÌNH ẢNH</h2>
        <ImgStore />
      </section>
      <section className="article-section">
        <h2 className="section-heading">BÀI VIẾT NỔI BẬT</h2>
        <ArticleList listArticle={listArticle} />
      </section>
    </main>
  );
}
