import Image from "next/image";
import axios from "axios";
import HeroSection from "./_components/HeroSection";
import InfoBlock from "./_components/InfoBlock";

export default async function Home() {
  const response = await axios.get(
    "http://127.0.0.1:1337/api/infoblocks-landing?populate=deep"
    // change local host (http://localhost:1337/api/infoblocks-landing) into 127.0.0.1: then the server #
  );
  console.log(response.data.data.attributes.info_blocks.data);

  const heroHeadline = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>happiness.</h1>
    </>
  );

  const infoBlockData = {
    headline: "The experience.",
    text: (
      <p className="copy">
        At Sam’s Surfcamp, we invite you to embark on an unforgettable surfing
        adventure. Nestled in the heart of [Location] our surf camp offers an
        exhilarating experience for beginners, intermediate surfers, and
        seasoned wave riders alike. Dive into the world of surfing with our
        expert instructors who have years of experience and a deep passion for
        the sport. Whether you're a first-time surfer looking to catch your
        first wave or a seasoned pro seeking to enhance your skills, our
        dedicated team is here to guide you every step of the way. Immerse
        yourself in the natural beauty of our surf camp's surroundings. Picture
        yourself waking up to the sound of crashing waves and feeling the warm
        sand beneath your feet. With pristine beaches and a vibrant coastal
        atmosphere, [Location] sets the perfect stage for your surf adventure.
      </p>
    ),
    button: (
      <button className="btn btn--medium btn--turquoise">Book Now</button>
    ),
    reversed: false,
  };

  return (
    <main>
      <HeroSection headline={heroHeadline} />
      <InfoBlock data={infoBlockData} />
      <InfoBlock data={{ ...infoBlockData, reversed: true }} />
    </main>
  );
}
