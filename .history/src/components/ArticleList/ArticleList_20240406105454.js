import "./style.scss";
import { ArticleItem } from "./ArticleItem";

const listArticle = [
  {
    img: "/img/articles/article-1.jpg",
    date: "20/04/2024",
    author: "Bùi Quang Trưởng",
    title: "Bật mí cho bạn cách chăm sóc mèo con chu đáo nhất",
    detail:
      "Quá trình nuôi cũng như là chăm sóc thú cưng là quá trình diễn ra trong cả một thời gian dài. Và quá trình nuôi mèo con với nh...",
  },
];

export const ArticleList = () => {
  return (
    <div className="article-list">
      <ArticleItem />
    </div>
  );
};
