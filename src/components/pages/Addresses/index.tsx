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
      <ul>
        {data.map((post) => (
          <>
            <li key={post.zipcode}>{post.zipcode}</li>
            <li key={post.address1}>{post.address1}</li>
            <li key={post.address2}>{post.address2}</li>
            <li key={post.address3}>{post.address3}</li>
          </>
        ))}
      </ul>
      <button onClick={handleClick}>ボタン</button>
    </>
  );
};
