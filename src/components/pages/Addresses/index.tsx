"use client";
import type { Address } from "@/types";
import { FC } from "react";

type Props = {
  data: Address[];
};

export const Addresses: FC<Props> = (props) => {
  const { data } = props;

  const handleClick = async () => {
    const zip = await fetch("https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060");
    const posts = await zip.json();
    console.log("posts:", posts.results);
  };

  return (
    <>
      <div>
        {data.map((post) => (
          <div key={post.zipcode}>
            <p>{post.zipcode}</p>
            <p>{post.address1}</p>
            <p>{post.address2}</p>
            <p>{post.address3}</p>
          </div>
        ))}
      </div>
      <button onClick={handleClick}>ボタン</button>
    </>
  );
};
