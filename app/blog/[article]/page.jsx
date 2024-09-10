// ! Creating a dynamic page for each individual article based on its slug:
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params

import ArticleIntro from "@/app/_components/Blog/ArticleIntro";
import ArticleOverview from "@/app/_components/Blog/ArticleOverview";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi.utils";

// ? 2. The slug is passed to this component through params.
// The component, which is by default server-side rendered, fetches the data from Strapi using the slug to display the article.
export default async function page({ params }) {
  const { article: slug } = params;

  // Fetch all articles from Strapi. This is necessary because each individual article page
  // needs the relevant article data based on the dynamically attributed slug.
  const articles = await fetchBlogArticles();
  const article = articles.find((article) => article.slug === slug); // Find the article with the matching slug

  return (
    <main>
      {/* Passing the fetched article data to the ArticleIntro and ArticleOverview components */}
      <section className="article-section">
        <ArticleIntro article={article} />
        <ArticleOverview article={article} />
      </section>
    </main>
  );
}

// ? 1. generateStaticParams pre-generates static paths for each article page based on the slug.
// This allows Next.js to create a static page for every article in Strapi, improving performance by pre-rendering pages.
export async function generateStaticParams() {
  // Fetch all blog articles from Strapi to retrieve their slugs
  const articles = await fetchDataFromStrapi("blog-articles");

  // Map through the articles and return an array of slugs that Next.js will use to generate static pages
  return articles.map((article) => ({
    article: article.attributes.slug, // Return the slug of each article
  }));
}
