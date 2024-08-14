import TabletCard, {
  TabletCardProps,
} from "@/components/tablet-card/tablet-card";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("TabletCard", () => {
  const mockOnUpdate = vi.fn();

  const props: TabletCardProps = {
    id: 1,
    name: "Hero Name",
    description: "Hero Description",
    picture: "hero.jpg",
    active: true,
    onUpdate: mockOnUpdate,
  };

  it("should render the TabletCard with correct details", () => {
    render(<TabletCard {...props} />);

    expect(screen.getByAltText("Hero Name")).toHaveAttribute("src", "hero.jpg");
    expect(screen.getByText("Hero Name")).toBeInTheDocument();
    expect(screen.getByText("Hero Description")).toBeInTheDocument();
  });

  it("should call onUpdate when the favorite button is clicked", () => {
    render(<TabletCard {...props} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockOnUpdate).toHaveBeenCalledWith(1);
  });

  it("should call onUpdate when the favorite button is activated by keyboard", () => {
    render(<TabletCard {...props} />);

    const button = screen.getByRole("button");
    fireEvent.keyDown(button);
    expect(mockOnUpdate).toHaveBeenCalledWith(1);

    fireEvent.keyDown(button);
    expect(mockOnUpdate).toHaveBeenCalledWith(1);
  });
});
