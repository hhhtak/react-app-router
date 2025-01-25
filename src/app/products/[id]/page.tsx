import { FC } from "react";

type Props = {
  params: {
    id: string; // 動的セグメント名
  };
};

const ProductPage: FC<Props> = async ({ params }: Props) => {
  const { id } = await params;

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {id}</p>
    </div>
  );
};

export default ProductPage;
