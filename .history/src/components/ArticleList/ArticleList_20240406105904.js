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
    img: "/img/articles/article-1.jpg",
    date: "20/04/2024",
    author: "Bùi Quang Trưởng",
    title: "Bật mí cho bạn cách chăm sóc mèo con chu đáo nhất",
    detail:
      "Quá trình nuôi cũng như là chăm sóc thú cưng là quá trình diễn ra trong cả một thời gian dài. Và quá trình nuôi mèo con với nh...",
    link: "#",
  },
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
    img: "/img/articles/article-1.jpg",
    date: "20/04/2024",
    author: "Bùi Quang Trưởng",
    title: "Bật mí cho bạn cách chăm sóc mèo con chu đáo nhất",
    detail:
      "Quá trình nuôi cũng như là chăm sóc thú cưng là quá trình diễn ra trong cả một thời gian dài. Và quá trình nuôi mèo con với nh...",
    link: "#",
  },
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
    img: "/img/articles/article-1.jpg",
    date: "20/04/2024",
    author: "Bùi Quang Trưởng",
    title: "Bật mí cho bạn cách chăm sóc mèo con chu đáo nhất",
    detail:
      "Quá trình nuôi cũng như là chăm sóc thú cưng là quá trình diễn ra trong cả một thời gian dài. Và quá trình nuôi mèo con với nh...",
    link: "#",
  },
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
    img: "/img/articles/article-1.jpg",
    date: "20/04/2024",
    author: "Bùi Quang Trưởng",
    title: "Bật mí cho bạn cách chăm sóc mèo con chu đáo nhất",
    detail:
      "Quá trình nuôi cũng như là chăm sóc thú cưng là quá trình diễn ra trong cả một thời gian dài. Và quá trình nuôi mèo con với nh...",
    link: "#",
  },
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
    img: "/img/articles/article-1.jpg",
    date: "20/04/2024",
    author: "Bùi Quang Trưởng",
    title: "Bật mí cho bạn cách chăm sóc mèo con chu đáo nhất",
    detail:
      "Quá trình nuôi cũng như là chăm sóc thú cưng là quá trình diễn ra trong cả một thời gian dài. Và quá trình nuôi mèo con với nh...",
    link: "#",
  },
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
    img: "/img/articles/article-1.jpg",
    date: "20/04/2024",
    author: "Bùi Quang Trưởng",
    title: "Bật mí cho bạn cách chăm sóc mèo con chu đáo nhất",
    detail:
      "Quá trình nuôi cũng như là chăm sóc thú cưng là quá trình diễn ra trong cả một thời gian dài. Và quá trình nuôi mèo con với nh...",
    link: "#",
  },
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
    img: "/img/articles/article-1.jpg",
    date: "20/04/2024",
    author: "Bùi Quang Trưởng",
    title: "Bật mí cho bạn cách chăm sóc mèo con chu đáo nhất",
    detail:
      "Quá trình nuôi cũng như là chăm sóc thú cưng là quá trình diễn ra trong cả một thời gian dài. Và quá trình nuôi mèo con với nh...",
    link: "#",
  },
];

export const ArticleList = () => {
  return (
    <div className="article-list">
      <ArticleItem />
    </div>
  );
};
