import SearchInput from "@/components/search-input/search-input"; // Ajusta la ruta si es necesario
import { HeroesProvider } from "@/contexts/heroContext";
import { LoaderProvider } from "@/contexts/loaderContext";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

// Mock de SearchIcon
vi.mock("@/assets/svg/icon-search.svg", () => ({
  default: () => <div>SearchIcon</div>,
}));

describe("SearchInput Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("render withouth crashing", () => {
    render(
      <LoaderProvider>
        <HeroesProvider>
          <SearchInput type="text" placeholder="Search a character..." />
        </HeroesProvider>
      </LoaderProvider>
    );

    const inputElement = screen.getByPlaceholderText("Search a character...");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");

    const searchIcon = screen.getByText(/SearchIcon/i);
    expect(searchIcon).toBeInTheDocument();
  });

  it("should update searchValue on input change", () => {
    render(
      <LoaderProvider>
        <HeroesProvider>
          <SearchInput type="text" placeholder="Search a character..." />
        </HeroesProvider>
      </LoaderProvider>
    );

    const inputElement = screen.getByPlaceholderText("Search a character...");
    fireEvent.change(inputElement, { target: { value: "Hero" } });

    expect(inputElement).toHaveValue("Hero");
  });

  it("should call change value on input value", async () => {
    render(
      <LoaderProvider>
        <HeroesProvider>
          <SearchInput type="text" placeholder="Search a character..." />
        </HeroesProvider>
      </LoaderProvider>
    );

    const inputElement = screen.getByPlaceholderText("Search a character...");
    const onChangeSpy = vi.fn();
    const onKeyUpSpy = vi.fn();

    inputElement.onchange = onChangeSpy;
    inputElement.onkeyup = onKeyUpSpy;

    fireEvent.change(inputElement, { target: { value: "Hero" } });
    fireEvent.keyUp(inputElement, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });

    expect(onChangeSpy).toHaveBeenCalled();
    expect(onKeyUpSpy).toHaveBeenCalled();

    expect(inputElement).toHaveValue("Hero");
  });
});
