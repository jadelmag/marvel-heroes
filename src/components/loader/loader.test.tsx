import { UILoader } from "@/components/index";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("UILoader Component", () => {
  it("should render without crashing", () => {
    const { container } = render(<UILoader />);
    expect(container).toBeDefined();
  });

  it("should contain a div with the correct class", () => {
    const { container } = render(<UILoader />);
    const div = container.querySelector("div.ui-loader");
    expect(div).not.toBeNull();
  });

  it("should render an SVG element", () => {
    const { container } = render(<UILoader />);
    const svg = container.querySelector("svg");
    expect(svg).not.toBeNull();
  });

  it("should contain a path element within the SVG", () => {
    const { container } = render(<UILoader />);
    const path = container.querySelector("svg path");
    expect(path).not.toBeNull();
  });
});
