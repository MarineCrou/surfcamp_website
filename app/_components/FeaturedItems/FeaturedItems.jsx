// *We're adding the `items` prop, passed in the `feautured articles` from the main blog page.
"use client";
// everytime you use useState, you're using a client component.
import { useState } from "react";
import FeaturedArticle from "./FeaturedArticle";

const FeaturedItems = ({ headline, items }) => {
  const [itemNumber, setItemNumber] = useState(3);
  //We want to display 3 more articles, when we click on the see more button, to start off with. Multiples of 3.

  const onShowMore = () => {
    if (itemNumber + 3 > items.length) {
      return setItemNumber(items.length);
    } else {
      return setItemNumber(itemNumber + 3);
    }
  };

  return (
    <secton className="featured-items">
      <h3 className="featured-items__headline">
        {headline || "Our Featured Articles"}
      </h3>
      <div className="featured-items__container">
        {/* We're using the slice elements to determine the number of blog articles we want featured in the container. `items.slice(0, itemNumber).map((item) => (...)` means only 3 articles will be displayed, as the usestate of itemNumber = 3 */}
        {items.slice(0, itemNumber).map((item) => (
          <FeaturedArticle key={item.slug} article={item} />
          /* The article being mapped through is `item`: {items.map((item)*/
        ))}
      </div>

      {/* Display the button ONLY if/when there are more articles left to display. If not, hide the button */}
      {itemNumber < items.length && (
        <button className="btn btn--medium btn--turquoise" onClick={onShowMore}>
          See more
        </button>
      )}
    </secton>
  );
};

export default FeaturedItems;
