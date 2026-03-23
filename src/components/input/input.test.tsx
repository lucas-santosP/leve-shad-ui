import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Input } from "./input";

describe("Input", () => {
  it("renders without crashing", () => {
    const { container } = render(<Input />);
    expect(container).toBeTruthy();
  });

  it("renders with placeholder", () => {
    const { getByPlaceholderText } = render(<Input placeholder="Type here" />);
    expect(getByPlaceholderText("Type here")).toBeTruthy();
  });

  it("renders with left icon", () => {
    const { getByTestId } = render(<Input leftIcon={<div data-testid="left-icon" />} />);
    expect(getByTestId("left-icon")).toBeTruthy();
  });

  it("renders with right icon", () => {
    const { getByTestId } = render(<Input rightIcon={<div data-testid="right-icon" />} />);
    expect(getByTestId("right-icon")).toBeTruthy();
  });
});
