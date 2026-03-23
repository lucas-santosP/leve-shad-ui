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
});
