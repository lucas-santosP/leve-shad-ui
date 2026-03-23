import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders without crashing", () => {
    const { container } = render(<Button>Click me</Button>);
    expect(container).toBeTruthy();
  });

  it("renders children", () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText("Click me")).toBeTruthy();
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>);
    fireEvent.click(getByText("Click me"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
