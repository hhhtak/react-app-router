"use client";

import { Button } from "@/components/atoms/Button";
import { redirect } from "next/navigation";
import { useActionState } from "react";
import { updateNameFormAction } from "./updateNameForm-actions";

const UpdateNameForm = () => {
  const { registerName } = updateNameFormAction();

  const [state, submitAction, isPending] = useActionState(
    async (_previousState: string, formData: FormData): Promise<any> => {
      const register = await registerName(formData);

      if (register.message) {
        return { errorMessage: register.message };
      }

      const zip = await fetch("https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060");

      const posts = await zip.json();

      if (posts.results === null) {
        return { errorMessage: posts.message };
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
      {state?.errorMessage && <p>{state?.errorMessage}</p>}
    </form>
  );
};

export default UpdateNameForm;
