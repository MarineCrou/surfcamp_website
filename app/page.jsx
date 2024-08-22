import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import { fetchDataFromStrapi, processInfoBlocks } from "@/utils/strapi.utils";

export default async function Home() {
  const data = await fetchDataFromStrapi("infoblocks-landing?populate=deep");

  const infoBlockData = processInfoBlocks(data);
  console.log(infoBlockData);

  const heroHeadline = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>happiness.</h1>
    </>
  );

  return (
    <main>
      <HeroSection headline={heroHeadline} />
      {/* <InfoBlock data={infoBlockData} />
      <InfoBlock data={{ ...infoBlockData, reversed: true }} /> */}
    </main>
  );
}
