import UIMenu, { UIMenuProps } from "@/components/menu/menu";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("UIMenu", () => {
  const mockOnChange = vi.fn();
  const mockOnKeyUp = vi.fn();

  const props: UIMenuProps = {
    id: "test-input",
    inputRef: null as React.Ref<HTMLInputElement | HTMLTextAreaElement>,
    placeholder: "Search...",
    label: "Search",
    variant: "filled",
    fullWidth: true,
    boxWidth: "100%",
    results: 5,
    onChange: mockOnChange,
    onKeyUp: mockOnKeyUp,
  };

  it("should render the TextField with correct props", () => {
    render(<UIMenu {...props} />);

    const textField = screen.getByPlaceholderText("Search...");
    expect(textField).toBeInTheDocument();
    expect(screen.getByText("5 RESULTS")).toBeInTheDocument();
  });

  it("should call onChange when text is entered", () => {
    render(<UIMenu {...props} />);

    fireEvent.change(screen.getByPlaceholderText("Search..."), {
      target: { value: "Test" },
    });

    expect(mockOnChange).toHaveBeenCalled();
  });

  it("should call onKeyUp when a key is pressed", () => {
    render(<UIMenu {...props} />);

    fireEvent.keyUp(screen.getByPlaceholderText("Search..."), {
      key: "Enter",
      code: "Enter",
    });

    expect(mockOnKeyUp).toHaveBeenCalled();
  });
});
