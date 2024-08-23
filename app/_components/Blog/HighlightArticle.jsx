import Link from "next/link";

const HighlightArticle = ({ data }) => {
  //   console.log(" The BLOG page 🎉 has been mounted");
  const { headline, excerpt, slug, featuredImage } = data;

  return (
    <article className="highlight-article">
      <div className="highlight-article__info">
        <h3>{headline}</h3>
        <p className="copy">{excerpt}</p>
        <Link className="btn btn--turquoise btn--medium" href={`/blog/${slug}`}>
          Read More
        </Link>
        <img
          src={featuredImage || "/assets/hero-experience.png"}
          alt="Article Photo"
        />
      </div>
    </article>
  );
};

export default HighlightArticle;
