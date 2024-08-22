import axios from "axios";
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
    // console.log(infoBlock.attributes?.image?.data.attributes.url);
    return {
      ...infoBlock.attributes, // spreads all properties within that element into a into a new
      imageSrc: BASE_URL + infoBlock.attributes?.image?.data.attributes.url, // creating a new property to Get image URL
      id: infoBlock.id, // to get the ID
    };
  });
}

// can also be written as follows
// export function processInfoBlocks(data) {
//   const infoBlocksRaw = data.attributes.info_blocks.data;
//   return infoBlocksRaw.map((infoBlock) => ({
//       ...infoBlock.attributes, // spreads all properties within that element into a into a new
//       imageSrc: infoBlock.attributes?.image?.data.attributes.url, // creating a new property to Get image URL
//       id: infoBlock.id, // to get the ID
//     }));
// }
