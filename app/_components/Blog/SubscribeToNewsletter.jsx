"use client";

const SubscribeToNewsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter__info">
        <h4>Subscribe to our Newslettre</h4>
        <p className="copy">
          Unlock Exclusive Insights and Stay In the Know – Subscribe to Our
          Newsletter Today to always stay in touch
        </p>
      </div>
      <form className="newsletter__form">
        <input type="text" className="newsletter__email" />
      </form>
    </section>
  );
};

export default SubscribeToNewsletter;
