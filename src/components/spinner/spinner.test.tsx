import Spinner from "@/components/spinner/spinner"; // Ajusta la ruta si es necesario
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Spinner Component", () => {
  it("render without crashing", () => {
    render(<Spinner />);

    const spinnerContainer = screen.getByRole("none");
    expect(spinnerContainer).toBeInTheDocument();
  });

  it("should render the loader element", () => {
    const { container } = render(<Spinner />);
    const loaderElement = container.querySelector(".loader");
    expect(loaderElement).toBeInTheDocument();
  });

  it("should apply the correct class names", () => {
    const { container } = render(<Spinner />);
    const spinnerElement = container.querySelector(".spinner");
    expect(spinnerElement).toHaveClass("spinner");

    const loaderElement = container.querySelector(".loader");
    expect(loaderElement).toHaveClass("loader");
  });
});
