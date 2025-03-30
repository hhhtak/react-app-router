import type { Address } from "@/types";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Addresses } from ".";

describe("Addresses", () => {
  const sampleAddresses: Address[] = [
    {
      address1: "高知県",
      address2: "南国市",
      address3: "蛍が丘",
      kana1: "ｺｳﾁｹﾝ",
      kana2: "ﾅﾝｺｸｼ",
      kana3: "ﾎﾀﾙｶﾞｵｶ",
      prefcode: "39",
      zipcode: "7830060",
    },
  ];

  test("住所データが正しくレンダリングされること", () => {
    render(<Addresses data={sampleAddresses} />);

    sampleAddresses.forEach((address) => {
      expect(screen.getByText(address.zipcode)).toBeInTheDocument();
      expect(screen.getByText(address.address1)).toBeInTheDocument();
      expect(screen.getByText(address.address2)).toBeInTheDocument();
      expect(screen.getByText(address.address3)).toBeInTheDocument();
    });
  });

  test("データが空の場合に何もレンダリングされないこと", () => {
    render(<Addresses data={[]} />);
    expect(screen.queryByRole("div")).toBeNull();
  });

  test("ボタンがクリックされたときに handleClick が呼び出されること", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue({ results: [{ zipcode: "7830060" }] }),
    });
    global.fetch = mockFetch;

    render(<Addresses data={sampleAddresses} />);
    const button = screen.getByRole("button", { name: "ボタン" });
    fireEvent.click(button);

    // 非同期処理が完了するまで待機
    await waitFor(() => {
      // モック化された fetch 関数が、指定された URL で呼び出されたことを確認
      expect(mockFetch).toHaveBeenCalledWith(
        "https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060"
      );
    });
  });
});
