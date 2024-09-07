// *We're adding the `items` prop, passed in the `feautured articles` from the main blog page.

import FeaturedArticle from "./FeaturedArticle";

const FeaturedItems = ({ headline, items }) => {
  return (
    <secton className="featured-items">
      <h3 className="featured-items__headline">
        {headline || "Our Featured Articles"}
      </h3>
      <div className="featured-items__container">
        {items.map((item) => (
          <FeaturedArticle key={item.slug} article={item} />
          /* The article being passed is the mapped `item`: {items.map((item)*/
        ))}
      </div>
    </secton>
  );
};

export default FeaturedItems;
