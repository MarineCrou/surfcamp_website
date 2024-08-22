const InfoBlock = ({ data }) => {
  const { headline, text, showImageRight, imageSrc } = data;
  //Changing reversed to showImageRight (as it's how we created it in strapi)
  //button
  // console.log(JSON.stringify(data));

  return (
    <div className={`info  ${showImageRight ? "info--reversed" : ""}`}>
      {" "}
      {/* depending on the reversed boolean, it will apply the class or not */}
      <img
        className="info__image"
        src={imageSrc || "/info-blocks/rectangle.png"}
        alt=""
      />
      <div className="info__text">
        <h2 className="info__headline">{headline}</h2>
        {text}
        {/* {button} */}
      </div>
    </div>
  );
};

export default InfoBlock;
