// This component is fetching the json response from Strapi, where we've enable the user, to tailer their Articles with multiple different content/component types : eg: paragraph, paragraph with image, image...
// This is where we'll be display the article according to how it was build out in strapi

const ArticleComponent = ({ component }) => {
  //   console.log(component);
  //   return <div>🎉🎉🎉🎉🎉🎉</div>; => testing if anything was being displayed on the article page, when mapping through the data (articleContent)

  const componentType = component.__component.split("blog-article.")[1];
  /* The API response includes a key named "__component" which holds the full name of the component 
     we're trying to display. For example, the response might contain "__component: 'blog-article.headline'".
    
     To make this more readable and extract only the relevant part (e.g., 'headline'), we split the string 
     on 'blog-article.'. This separates the component name into an array, and we access the second part 
     [1], which gives us 'headline'. This allows us to isolate the specific component name for easier use 
     elsewhere in our code. */

  //   using a SWITCH case/break => depending on the value of the component, if it is a `paragraph_with_image (on the json response)`.
  //   componentType is a prop. could be called anything
  switch (componentType) {
    case "headline":
      return <h1>Headline!</h1>;
    case "paragraph-with-image":
      return <h1>Paragraph with image</h1>;
    case "paragraph":
      return <h1>Paragraph Only !</h1>;
    case "landscape-image":
      return <h1>Lanscape Image</h1>;
    default:
      return <h1>😭😭😭😭😭</h1>;
  }
};

export default ArticleComponent;
