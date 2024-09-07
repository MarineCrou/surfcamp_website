// ! Creating blueprint individual article page, with a dynamically attributed slug : https://nextjs.org/docs/app/api-reference/functions/generate-static-params

import { fetchBlogArticles } from "@/utils/strapi.utils";
import { fetchDataFromStrapi } from "@/utils/strapi.utils";

export default async function page({ params }) {
  const { article: slug } = params;

  //   we're fetching all of the articles as this component will be displayed on each indivisual blog article page
  const articles = await fetchBlogArticles();
  const article = articles.find((article) => article.slug === slug);
  return (
    <main>
      <h1>{article.headline}</h1>
    </main>
  );
}

export async function generateStaticParams() {
  //   this will give us an array of data, in chich we have the slug displayed
  const articles = await fetchDataFromStrapi("blog-articles");

  return articles.map((article) => ({
    article: article.attributes.slug,
  }));
}
