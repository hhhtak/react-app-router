import { Addresses } from "@/components/pages/Addresses";

export default async function ProductsPage() {
  const zip = await fetch("https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060");
  const posts = await zip.json();

  const zip2 = fetch("https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060");

  const data2 = await Promise.all([zip2, zip2, zip2]);

  console.log("data2:", data2);

  const props = {
    data: posts.results,
  };
  return <Addresses {...props} />;
}
