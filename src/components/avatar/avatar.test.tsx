import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Avatar } from "./avatar";

describe("Avatar", () => {
  it("renders without crashing", () => {
    const { container } = render(<Avatar />);
    expect(container).toBeTruthy();
  });

  it("renders fallback text", () => {
    const { getByText } = render(<Avatar fallback="AB" />);
    expect(getByText("AB")).toBeTruthy();
  });
});
