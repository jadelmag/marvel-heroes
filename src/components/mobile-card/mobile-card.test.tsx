import MobileCard, {
  MobileCardProps,
} from "@/components/mobile-card/mobile-card";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("MobileCard", () => {
  const mockOnUpdate = vi.fn();

  const props: MobileCardProps = {
    id: 1,
    name: "Hero Name",
    description: "Hero Description",
    picture: "hero.jpg",
    active: true,
    onUpdate: mockOnUpdate,
  };

  it("should render the MobileCard with correct details", () => {
    render(<MobileCard {...props} />);

    expect(screen.getByAltText("Hero Name")).toHaveAttribute("src", "hero.jpg");
    expect(screen.getByText("Hero Name")).toBeInTheDocument();
    expect(screen.getByText("Hero Description")).toBeInTheDocument();
  });

  it("should call onUpdate when the favorite button is clicked", () => {
    render(<MobileCard {...props} />);

    const button = screen.getByTestId(/favorite/i);
    fireEvent.click(button);

    expect(mockOnUpdate).toHaveBeenCalledWith(1);
  });

  it("should call onUpdate when the favorite button is activated by keyboard", () => {
    render(<MobileCard {...props} />);

    const button = screen.getByTestId(/favorite/i);
    fireEvent.keyDown(button);
    expect(mockOnUpdate).toHaveBeenCalledWith(1);

    fireEvent.keyDown(button);
    expect(mockOnUpdate).toHaveBeenCalledWith(1);
  });
});
