import "./style.scss";
import { ArticleItem } from "./ArticleItem";

const listArticle = [];

export const ArticleList = () => {
  return (
    <div className="article-list">
      <ArticleItem />
    </div>
  );
};
