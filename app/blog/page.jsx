import HighlightArticle from "../_components/Blog/HighlightArticle";
import SubscribeToNewsletter from "../_components/Blog/SubscribeToNewsletter";
import FeaturedItems from "../_components/FeaturedItems/FeaturedItems";

export default function Page() {
  console.log(" The BLOG page has been mounted");

  const highlightArticleData = {
    headline: "3 tips for a super fast takeoff",
    excerpt:
      "Improving your take-off phase in surfing is a fundamental step toward riding waves with more confidence and style. Improving your take-off phase is a gradual process, and it may take time to master. Be patient, stay committed to practice, and enjoy the journey of becoming a better surfer. With dedication and persistence, you'll see progress and have more enjoyable rides. Here is how:",
    slug: "takeoff",
    featuredImage: "/assets/hero-experience.png",
  };

  // * In here, we'll be fetching the articles to display on the main blog page, we're creating an array of objects
  const featuredArticles = [
    {
      headline:
        "surfboard shaping and design behind the scenes of crafting the perfect board",
      slug: "/blog/whatever",
      date: "Monday, June 05, 2023",
      featuredImage: "/assets/hero-experience.png",
    },
    {
      headline:
        "surfboard shaping and design behind the scenes of crafting the perfect board",
      slug: "/blog/whatever",
      date: "Monday, June 05, 2023",
      featuredImage: "/assets/hero-experience.png",
    },
    {
      headline:
        "surfboard shaping and design behind the scenes of crafting the perfect board",
      slug: "/blog/whatever",
      date: "Monday, June 05, 2023",
      featuredImage: "/assets/hero-experience.png",
    },
    {
      headline:
        "surfboard shaping and design behind the scenes of crafting the perfect board",
      slug: "/blog/whatever",
      date: "Monday, June 05, 2023",
      featuredImage: "/assets/hero-experience.png",
    },
    {
      headline:
        "surfboard shaping and design behind the scenes of crafting the perfect board",
      slug: "/blog/whatever",
      date: "Monday, June 05, 2023",
      featuredImage: "/assets/hero-experience.png",
    },
    {
      headline:
        "surfboard shaping and design behind the scenes of crafting the perfect board",
      slug: "/blog/whatever",
      date: "Monday, June 05, 2023",
      featuredImage: "/assets/hero-experience.png",
    },
  ];

  return (
    <main className="blog-page ">
      <HighlightArticle data={highlightArticleData} />
      <SubscribeToNewsletter />
      <FeaturedItems items={featuredArticles} />{" "}
      {/* We don't need to passe in the `headline` value form  the FeaturedItems component, as the default value is the one we want on the blog page :"Our Featured Articles */}
    </main>
  );
}
