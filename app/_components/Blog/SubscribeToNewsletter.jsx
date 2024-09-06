"use client";
import { useState } from "react"; // Creating a use state to track what the user is typing in the input section

const SubscribeToNewsletter = () => {
  console.log("🎉 SubscribeToNewsletter component rendered 🎉");

  const [email, setEmail] = useState("");
  const [hasSignedUp, setHasSignedUp] = useState(false);

  const onChange = (e) => {
    console.log("Email input changed:", e.target.value);
    setEmail(e.target.value);
  };

  const onSubmit = (e) => {
    console.log("On submit has been clicked");
    e.preventDefault();
    console.log("Current email:", email);

    if (email.length > 0) {
      console.log("Email is valid, updating hasSignedUp state");
      setHasSignedUp(true);
    } else {
      console.log("Email is empty or invalid");
    }
  };

  return (
    <section className="newsletter">
      {hasSignedUp ? (
        <h4 className="newsletter__thanks">
          Thank you for signing up to our newsletter !
        </h4>
      ) : (
        <>
          <div className="newsletter__info">
            <h4>Subscribe to our newsletter</h4>
            <p className="copy">
              Unlock Exclusive Insights and Stay In the Know – Subscribe to Our
              Newsletter Today to always stay in touch
            </p>
          </div>
          <form className="newsletter__form" onSubmit={onSubmit}>
            <input
              id="email"
              name="email"
              type="text"
              className="newsletter__email input"
              placeholder="Enter your E-mail address"
              value={email}
              onChange={onChange}
            />
            <button
              type="submit"
              className="newsletter__subscribe btn btn--medium btn--turquoise"
            >
              SUBSCRIBE
            </button>
          </form>
        </>
      )}
    </section>
  );
};

export default SubscribeToNewsletter;
