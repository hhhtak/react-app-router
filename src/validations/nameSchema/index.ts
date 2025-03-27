import { z } from "zod";

export const nameSchema = z
  .string()
  .min(1, { message: "1文字以上で入力してください" })
  .max(20, { message: "20文字以内で入力してください" });

export type NameSchemaType = z.infer<typeof nameSchema>;
