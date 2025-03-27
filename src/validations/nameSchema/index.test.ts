import { describe, expect, it } from "vitest";
import { nameSchema } from "./index";

describe("nameSchema", () => {
  it("空文字列はエラーになる", () => {
    const result = nameSchema.safeParse("");
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe("1文字以上で入力してください");
    }
  });

  //   it("undefinedはエラーになる", () => {
  //     const result = nameSchema.safeParse(undefined);
  //     expect(result.success).toBe(false);
  //     if (!result.success) {
  //       expect(result.error.issues[0].message).toBe("入力が必須の項目です");
  //     }
  //   });

  it("1文字未満はエラーになる", () => {
    const result = nameSchema.safeParse("");
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe("1文字以上で入力してください");
    }
  });

  it("20文字より多い場合はエラーになる", () => {
    const result = nameSchema.safeParse("a".repeat(21));
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe("20文字以内で入力してください");
    }
  });

  it("1文字の場合は正常に検証される", () => {
    const result = nameSchema.safeParse("a");
    expect(result.success).toBe(true);
  });

  it("20文字の場合は正常に検証される", () => {
    const result = nameSchema.safeParse("a".repeat(20));
    expect(result.success).toBe(true);
  });

  it("10文字の場合は正常に検証される", () => {
    const result = nameSchema.safeParse("abcdefghij");
    expect(result.success).toBe(true);
  });
});
