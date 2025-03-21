"use client";

import { Button } from "@/components/atoms/Button";
import { redirect } from "next/navigation";
import { useActionState } from "react";

const UpdateNameForm = () => {
  const [error, submitAction, isPending] = useActionState(
    async (previousState: any, formData: any) => {
      console.log("previousState:", previousState);
      console.log("formData:", formData.get("name"));
      const zip = await fetch("https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060");

      const posts = await zip.json();

      if (posts.results === null) {
        return posts.message;
      }
      redirect("/products");
    },
    null
  );

  // ボタン押下時にisPendingがtrueになることを確認
  console.log("isPending:", isPending);

  return (
    <form action={submitAction}>
      <input type="text" name="name" className="border-2 mr-2" />
      <Button type="submit" disabled={isPending}>
        Update
      </Button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default UpdateNameForm;
