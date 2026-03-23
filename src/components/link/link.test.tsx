import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Link } from "./link";

describe("Link", () => {
  it("renders without crashing", () => {
    const { container } = render(<Link href="#">Click</Link>);
    expect(container).toBeTruthy();
  });

  it("renders children", () => {
    const { getByText } = render(<Link href="#">Click me</Link>);
    expect(getByText("Click me")).toBeTruthy();
  });

  it("has correct href", () => {
    const { getByRole } = render(<Link href="/home">Home</Link>);
    expect(getByRole("link")).toHaveAttribute("href", "/home");
  });
});
