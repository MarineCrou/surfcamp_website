const ArticleHeadline = ({ headline }) => {
  //   console.log(headline);

  // In your code, setting id={headline.slug} on the <h3> element enables the table of contents (or any navigation element)
  // to scroll the page to the right section when clicked. Let me break this down step-by-step.
  // In HTML, the id attribute allows you to create anchor points on the page. You can navigate to these anchor points using links.
  return (
    <h3 className="article-headline" id={headline.slug}>
      {headline.headline}
    </h3>
  );
};

export default ArticleHeadline;
