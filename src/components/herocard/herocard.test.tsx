import HeroCard from "@/components/herocard/herocard"; // Asegúrate de ajustar la ruta si es necesario
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";

// Mock de Heart y CutIcon
vi.mock("@/components/heart/heart", () => ({
  default: () => <div>Heart Component</div>,
}));
vi.mock("@/assets/svg/icon-cut.svg", () => ({
  default: () => <div>CutIcon</div>,
}));

describe("HeroCard Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const hero = {
    id: 1,
    name: "Hero Name",
    picture: "hero-picture-url",
    description: "Hero Description",
  };

  it("render without crashing", () => {
    render(
      <BrowserRouter>
        <HeroCard
          id={hero.id}
          name={hero.name}
          description={hero.description}
          picture={hero.picture}
        />
      </BrowserRouter>
    );

    const altText = screen.getByAltText(/Hero Name hero/i);
    expect(altText).toBeInTheDocument();

    const heartSvg = screen.getByText("Heart Component");
    expect(heartSvg).toBeInTheDocument();

    const cutSvg = screen.getByText("CutIcon");
    expect(cutSvg).toBeInTheDocument();
  });

  it("should navigate to detail route with state on image click", () => {
    render(
      <BrowserRouter>
        <HeroCard
          id={hero.id}
          name={hero.name}
          description={hero.description}
          picture={hero.picture}
        />
      </BrowserRouter>
    );

    const image = screen.getByRole("none");

    const onClickSpy = vi.fn();

    image.onclick = onClickSpy;
    fireEvent.click(image);

    expect(onClickSpy).toHaveBeenCalled();
  });
});
