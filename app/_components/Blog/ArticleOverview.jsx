import Link from "next/link";

const ArticleOverview = ({ article }) => {
  // Extracting all headline components from the article content
  const headlines = article.articleContent.filter(
    (component) => component.__component === "blog-article.headline"
  );

  return (
    <div className="article-overview">
      <div className="article-overview__info">
        <h3 className="article-overview__headline">In this blog</h3>
        <h5 className="article-overview__excerpt">{article.excerpt}</h5>
      </div>
      <ul className="article-overview__contents">
        {/* 
          Mapping over the filtered headlines to dynamically create a list.
          The map function provides each headline and its index (idx), 
          allowing us to display the headlines as an ordered list (e.g., "1. surfing spots", "2. experience").
        */}
        {headlines.map((headline, idx) => {
          return (
            <li key={headline.id}>
              {/* 
                Using the Next.js Link component to create anchor links.
                This will enable users to navigate to a specific section of the page 
                that corresponds to the headline by using a URL fragment (e.g., #headline.slug).
              */}
              <Link href={`#${headline.slug}`}>
                {idx + 1}. {headline.headline}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleOverview;

// ! Note:
/* 
  Alternatively, the map function can return JSX implicitly by using parentheses () instead of curly braces {}.
  When parentheses () are used, the JSX is returned without needing the 'return' keyword.
  
  Example:
  
  {headlines.map((headline, idx) => (
    <li key={headline.id}>
      {idx + 1}. {headline.headline}
    </li>
  ))}
  
  If curly braces {} are used instead, you'll need to explicitly include 'return', 
  as demonstrated in the main implementation above.
*/
