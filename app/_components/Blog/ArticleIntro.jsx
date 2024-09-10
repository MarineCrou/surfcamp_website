import { formatDate } from "@/utils/strapi.utils";

const ArticleIntro = ({ article }) => {
  // Logging the current theme color being applied (pulled from Strapi's blueprints) : article.color
  console.log("This is the theme:", article.color, "🎉🎉🎉🎉");

  return (
    <div className="article-intro">
      <div className="article-intro__background">
        {/* Display the featured image of the article */}
        <img src={article.featuredImage} alt="" />
      </div>
      <h3
        // Dynamically apply the theme (e.g., black/white), set in the article-intro.scss file to the headline based on the article's theme color
        className={`article-intro__headline article-intro__headline--${article.color}`}
      >
        {article.headline}
      </h3>
      <p
        // Apply the theme to the formatted publication date
        className={`copy-small bold copy-small--${article.color}`}
      >
        {formatDate(article.publishedAt)}
      </p>
      {/* 
        Format the author's name with the same theme color.
        Make sure that `formatDate` is imported from strapi.utils to properly format the publication date.
      */}
      <p className={`copy-small copy-small--${article.color}`}>
        {article.author}
      </p>
    </div>
  );
};

export default ArticleIntro;
