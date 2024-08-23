import Link from "next/link";

const HighlightArticle = ({ data }) => {
  //   console.log(" The BLOG component 🎉 has been mounted");
  const { headline, excerpt, slug, featuredImage } = data;

  return (
    <article className="highlight-article">
      <div className="highlight-article__info">
        <h3>{headline}</h3>
        <p className="copy">{excerpt}</p>
        <Link className="btn btn--turquoise btn--medium" href={`/blog/${slug}`}>
          Read More
        </Link>
      </div>
      <img
        className="highlight-article__image"
        src={featuredImage}
        alt="Article Photo"
      />
    </article>
  );
};

export default HighlightArticle;
