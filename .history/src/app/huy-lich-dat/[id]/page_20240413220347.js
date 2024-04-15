export default function page({ params }) {
  return (
    <div className="done-wrapper">
      <img
        src="/icon/lets-icons_done-ring-round-fill.svg"
        alt=""
        style={{ marginBottom: "20px" }}
      />
      <h2 style={{ marginBottom: "50px" }}>Hoàn thành</h2>

      <p style={{ marginBottom: "14px" }}>
        Số đặt lịch của bạn là:{" "}
        <span style={{ fontSize: "24px" }}>{params.id}</span>
      </p>
      <p style={{ marginBottom: "30px" }}>
        Mọi thắc mắc xin hãy liên hệ tới hotline (0977354956) của Petpals để
        được hỗ trợ sớm nhất nhé !
      </p>

      <p>
        <b>Cảm ơn bạn đã tin tưởng và sử dụng dịch vụ của chúng tôi !</b>
      </p>
      <Link className="btn prev-btn" href="/">
        Quay về trang chủ
      </Link>
    </div>
  );
}
