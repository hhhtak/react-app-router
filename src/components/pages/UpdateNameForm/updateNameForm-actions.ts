"use client";

import { nameSchema } from "@/validations";

export const updateNameFormAction = () => {
  const registerName = async (formData: FormData) => {
    // const validatedFields = nameSchema.safeParse({
    //   name: formData.get("name"),
    // });
    const validatedFields = nameSchema.safeParse(formData.get("name"));

    const rawFormData = Object.fromEntries(formData);

    // 型ガード
    const payload = {
      name: typeof rawFormData.name === "string" ? rawFormData.name : "",
    };

    // zodのバリデーション
    if (!validatedFields.success) {
      return {
        ...payload,
        zodErrors: validatedFields.error.flatten().fieldErrors,
        registerErrors: validatedFields.error.issues[0].code,
        message: validatedFields.error.issues[0].message,
      };
    }

    return {
      ...payload,
      zodErrors: null,
      registerErrors: null,
      message: null,
    };
  };

  return { registerName };
};
