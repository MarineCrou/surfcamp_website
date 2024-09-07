import axios from "axios";
import Link from "next/link";
import { RedirectType } from "next/navigation";
const BASE_URL = process.env.STRAPI_URL || "http://127.0.0.1:1337";

export async function fetchDataFromStrapi(route) {
  const url = `${BASE_URL}/api/${route}`;

  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (err) {
    throw new Error(`could not fetch data from the ${url}`);
  }
}

export function processInfoBlocks(data) {
  const infoBlocksRaw = data.attributes.info_blocks.data;
  return infoBlocksRaw.map((infoBlock) => {
    // console.log(`🎉🎉🎉🎉${infoBlock.attributes.button}`);
    return {
      ...infoBlock.attributes, // spreads all properties within that element into a into a new
      imageSrc: BASE_URL + infoBlock.attributes?.image?.data.attributes.url, // creating a new property to Get image URL
      id: infoBlock.id, // to get the ID
      button: createInfoblockButton(infoBlock.attributes.button),
    };
  });
}
// ! can also write it as follows :
// export function processInfoBlocks(data) {
//   const infoBlocksRaw = data.attributes.info_blocks.data;
//   return infoBlocksRaw.map((infoBlock) => ({
//       ...infoBlock.attributes, // spreads all properties within that element into a into a new
//       imageSrc: infoBlock.attributes?.image?.data.attributes.url, // creating a new property to Get image URL
//       id: infoBlock.id, // to get the ID
//     }));
// }

function createInfoblockButton(buttonData) {
  if (!buttonData) {
    return null;
  }

  // Return the JSX directly
  return (
    <Link
      href={`/${buttonData.slug}`}
      className={`btn btn--medium btn--${buttonData.color}`}
    >
      {buttonData.text || "Click here"} {/* Example label */}
    </Link>
  );
}

export async function fetchBlogArticles() {
  const blogData = await fetchDataFromStrapi("blog-articles?populate=deep");
  const processBlogArticles = blogData.map(processBlogArticle);

  // filter articles by last published date
  processBlogArticles.sort(
    (a, z) => new Date(z.publishedAt) - new Date(a.publishedAt)
  );

  return processBlogArticles;
}

function processBlogArticle(article) {
  return {
    ...article.attributes,
    id: article.id,
    featuredImage:
      BASE_URL + article.attributes?.featuredimage?.data?.attributes?.url,
  };
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return date.toLocaleDateString("en-us", options);
}
