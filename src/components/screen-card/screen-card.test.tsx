import ScreenCard, {
  ScreenCardProps,
} from "@/components/screen-card/screen-card";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("ScreenCard", () => {
  const mockOnUpdate = vi.fn();

  const props: ScreenCardProps = {
    id: 1,
    name: "Hero Name",
    description: "Hero Description",
    picture: "hero.jpg",
    active: true,
    onUpdate: mockOnUpdate,
  };

  it("should render the ScreenCard with correct details", () => {
    render(<ScreenCard {...props} />);

    expect(screen.getByAltText("Hero Name")).toHaveAttribute("src", "hero.jpg");
    expect(screen.getByText("Hero Name")).toBeInTheDocument();
    expect(screen.getByText("Hero Description")).toBeInTheDocument();
  });

  it("should call onUpdate when the favorite button is clicked", () => {
    render(<ScreenCard {...props} />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(mockOnUpdate).toHaveBeenCalledWith(1);
  });

  it("should call onUpdate when the favorite button is activated by keyboard", () => {
    render(<ScreenCard {...props} />);

    const button = screen.getByRole("button");
    fireEvent.keyDown(button);
    expect(mockOnUpdate).toHaveBeenCalledWith(1);

    fireEvent.keyDown(button);
    expect(mockOnUpdate).toHaveBeenCalledWith(1);
  });
});
