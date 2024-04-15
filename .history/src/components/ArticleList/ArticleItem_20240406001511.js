export const ArticleItem = () => {
  return (
    <div className="article-item">
      <div className="article-img">
        <img src="/img/articles/article-1.jpg" alt="" />
        <div className="article-introduce">
          <div className="article-date">
            <img src="/icon/mdi_calendar.svg" alt="" />
            <p>20/04/2024</p>
          </div>
          <div className="article-author">
            <span>Đăng bởi: </span>Bùi Quang Trưởng
          </div>
        </div>
      </div>
    </div>
  );
};
