import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Button } from ".";

describe("Button", () => {
  test("正しいテキストでレンダリングされる", () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole("button", { name: "Click Me" });
    expect(buttonElement).toBeInTheDocument();
  });

  test("デフォルトサイズ（normal）でレンダリングされる", () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole("button", { name: "Click Me" });
    expect(buttonElement).toHaveClass("w-[240px]");
  });

  test("smallサイズでレンダリングされる", () => {
    render(<Button size="small">Click Me</Button>);
    const buttonElement = screen.getByRole("button", { name: "Click Me" });
    expect(buttonElement).toHaveClass("w-[120px]");
  });

  test("disabledとしてレンダリングされる", () => {
    render(<Button disabled>Click Me</Button>);
    const buttonElement = screen.getByRole("button", { name: "Click Me" });
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass("disabled:bg-gray-500");
  });

  test("クリック時にonClickハンドラが呼び出される", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const buttonElement = screen.getByRole("button", { name: "Click Me" });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("disabled時はonClickハンドラが呼び出されない", () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Click Me
      </Button>
    );
    const buttonElement = screen.getByRole("button", { name: "Click Me" });
    fireEvent.click(buttonElement);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
