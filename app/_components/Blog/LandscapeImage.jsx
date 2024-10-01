import { extractImageUrl } from "@/utils/strapi.utils";

const LandscapreImage = ({ imageData }) => {
  console.log(imageData);
  const { imageCaption, image } = imageData;
  return (
    <div className="article-image">
      <img src={extractImageUrl(image)} alt="" />
      {imageCaption && (
        <p className="copy copy-small article-inage__caption">{imageCaption}</p>
      )}
    </div>
  );
};

export default LandscapreImage;
