import ReactMarkdown from "react-markdown";

const InfoBlock = ({ data }) => {
  // console.log(data.button);
  const { headline, text, ShowImageRight, imageSrc, button } = data;
  //Changing reversed to showImageRight (as it's how we created it in strapi)
  // console.log(JSON.stringify(data));
  return (
    <div className={`info  ${ShowImageRight ? "info--reversed" : ""}`}>
      {" "}
      {/* depending on the reversed boolean, it will apply the class or not */}
      <img
        className="info__image"
        src={imageSrc || "/info-blocks/rectangle.png"}
        alt=""
      />
      <div className="info__text">
        <h2 className="info__headline">{headline}</h2>
        <ReactMarkdown className="copy">{text}</ReactMarkdown>
        {button}
      </div>
    </div>
  );
};

export default InfoBlock;
