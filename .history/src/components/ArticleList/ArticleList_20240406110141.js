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
