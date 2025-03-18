import { Addresses } from "@/components/pages/Addresses";
import type { Address } from "@/types";

export default async function ProductsPage() {
  // todo:開発したAPIなら型を縛ったほうがよさそう
  const zip = await fetch("https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060");
  const zipJson = await zip.json();
  const data: Address[] = zipJson.results;

  return <Addresses data={data} />;
}
