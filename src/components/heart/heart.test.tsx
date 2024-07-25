import Heart from "@/components/heart/heart"; // Asegúrate de ajustar la ruta si es necesario
import { FavsProvider } from "@/contexts/favContext";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";

describe("Heart Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("render without crashing", () => {
    render(
      <FavsProvider>
        <BrowserRouter>
          <Heart />
        </BrowserRouter>
      </FavsProvider>
    );
    const heartbutton = screen.getByRole("button");
    expect(heartbutton).toBeInTheDocument();
  });

  it("should render name", () => {
    render(
      <FavsProvider>
        <BrowserRouter>
          <Heart
            id={0}
            name="Wolverine"
            description="description"
            picture="https://www.picture.es/logo.png"
          />
        </BrowserRouter>
      </FavsProvider>
    );

    const name = screen.getByText(/Wolverine/i);
    expect(name).toBeInTheDocument();
  });

  it("should call on click", () => {
    render(
      <FavsProvider>
        <BrowserRouter>
          <Heart
            id={0}
            name="Wolverine"
            description="description"
            picture="https://www.picture.es/logo.png"
          />
        </BrowserRouter>
      </FavsProvider>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const onClickSpy = vi.fn();
    button.onclick = onClickSpy;
    fireEvent.click(button);

    expect(onClickSpy).toHaveBeenCalled();
  });
});
