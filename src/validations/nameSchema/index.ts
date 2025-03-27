import { z } from "zod";

export const nameSchema = z
  .string({ required_error: "入力が必須の項目です" })
  .min(1, { message: "入力が必須の項目です" })
  .max(20, { message: "入力値が長すぎます" });

export type NameSchemaType = z.infer<typeof nameSchema>;
