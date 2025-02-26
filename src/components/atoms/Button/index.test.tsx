import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Button } from ".";

describe("Button", () => {
  test("renders App component", () => {
    render(<Button>hogehoge</Button>);
    const buttonElement = screen.getByRole("button", { name: "hogehoge" });

    expect(buttonElement).toBeInTheDocument();
  });
});
