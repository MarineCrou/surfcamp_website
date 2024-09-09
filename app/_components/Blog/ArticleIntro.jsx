// Getting an article from our parent componnet, which is the blog article componente.

import { formatDate } from "@/utils/strapi.utils";

const ArticleIntro = ({ article }) => {
  console.log("This is the theme:", article.color, "🎉🎉🎉🎉");
  //   console.log(article);

  return (
    <div className="article-intro">
      <div className="article-intro__background">
        <img src={article.featuredImage} alt="" />
      </div>
      <h3
        className={`article-intro__headline article-intro__headline--${article.color}`}
      >
        {article.headline}
      </h3>
      <p className={`copy-small bold copy-small--${article.color}`}>
        {formatDate(article.publishedAt)}
      </p>
      {/* We've already created a way to format the date, in the strapi.utils file. So we're just applying that. Don't forge to import it from the file first. */}
      <p className={`copy-small copy-small--${article.color}`}>
        {article.author}
      </p>
    </div>
  );
};

export default ArticleIntro;
