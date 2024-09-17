import { extractImageUrl } from "@/utils/strapi.utils";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ImageTextComponent = ({ component }) => {
  //   console.log(component.image.data.attributes.url);
  //   console.log(extractImageUrl(component.image)); => in the utils file
  return (
    <div
      className={`article-text-image ${
        component.isLandscape ? "" : "article-text-image--portrait"
      }${component.imageShowsRight ? "" : "article-text-image--reversed"}  `}
    >
      <ReactMarkdown className="copy article-text-image__image article-paragraph">
        {/* Importing react markdown to bring in the styling/formatting from strapi (Blod, Italic...) - We replaced the p tag by the React-Markdown*/}
        {component.paragraph}
      </ReactMarkdown>
      <div className="article-text-image__container">
        <div className="article-text-image__image">
          <img src={extractImageUrl(component.image)} alt="" />
        </div>
        {component.imageCaption && (
          <p className="article-text-image__caption copy-small">
            {component.imageCaption}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageTextComponent;

// The component prop can be destructured to directly access its properties like so:

// const ImageTextComponent = ({ component }) => {
//   const { image, paragraph, imageCaption, isLandscape, imageShowsRight } = component;

//   return (
//     <div className={`article-text-image ${
//         isLandscape ? "" : "article-text-image--portrait"}
//       ${imageShowsRight ? "" : "article-text-image--reversed"}`}">
//       <ReactMarkdown className="copy article-text-image__image article-paragraph">
//         {/* Importing react markdown to bring in the styling/formatting from strapi (Blod, Italic...) - We replaced the p tag by the React-Markdown*/}
//         {paragraph}
//       </ReactMarkdown>
//       <div className="article-text-image__container">
//         <div className="article-text-image__image">
//           <img src={extractImageUrl(image)} alt="" />
//         </div>
//         {imageCaption && (
//           <p className="article-text-image__caption copy-small">
//             {imageCaption}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };
