import SearchBox from "@/components/search-box/search-box"; // Asegúrate de ajustar la ruta si es necesario
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("SearchBox Component", () => {
  it("render without crashing", () => {
    render(<SearchBox total={0} />);

    const searchInput = screen.getByPlaceholderText("Search a character...");
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute("type", "text");
  });

  it("should display the correct total results", () => {
    render(<SearchBox total={10} />);

    const resultsText = screen.getByText("10 Results");
    expect(resultsText).toBeInTheDocument();
  });

  it("should display '0 Results' when total is 0", () => {
    render(<SearchBox total={0} />);

    const resultsText = screen.getByText("0 Results");
    expect(resultsText).toBeInTheDocument();
  });
});
