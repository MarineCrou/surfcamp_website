// ! Creating blueprint individual article page, with a dynamically attributed slug : https://nextjs.org/docs/app/api-reference/functions/generate-static-params

import ArticleIntro from "@/app/_components/Blog/ArticleIntro";
import ArticleOverview from "@/app/_components/Blog/ArticleOverview";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi.utils";

// ? 2. it then gives that slug back to our component (page), through the params. An our component, that is by default serverside, will then fecth the data in strapi to display on the screen
export default async function page({ params }) {
  const { article: slug } = params;

  //   we're fetching all of the articles as this component will be displayed on each indivisual blog article page
  const articles = await fetchBlogArticles();
  const article = articles.find((article) => article.slug === slug);
  return (
    <main>
      {/* The article, is the articles we've fetched in Strapi */}
      <ArticleIntro article={article} />
      <ArticleOverview article={article} />
    </main>
  );
}

// ? 1. generateStaticParams pre-generates a page/component for each one of the articles we've created in Strapi, based on the slug
export async function generateStaticParams() {
  const articles = await fetchDataFromStrapi("blog-articles"); //   this will give us an array of data, in chich we have the slug displayed
  return articles.map((article) => ({
    article: article.attributes.slug,
  }));
}
