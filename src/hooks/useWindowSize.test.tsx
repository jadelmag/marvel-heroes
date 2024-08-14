import useWindowSize from "@/hooks/useWindowSize";
import { act, renderHook } from "@testing-library/react";
import { describe } from "node:test";
import { expect, test } from "vitest";

describe("useWindowSize", () => {
  test("should test init values", () => {
    const { result } = renderHook(useWindowSize);
    const currentWidth = result.current.width;
    const currentHeight = result.current.height;

    expect(currentWidth).toBe(1024);
    expect(currentHeight).toBe(768);
  });

  test("should update values", () => {
    const { result } = renderHook(useWindowSize);
    const currentWidth = result.current.width;
    const currentHeight = result.current.height;

    expect(currentWidth).toBe(1024);
    expect(currentHeight).toBe(768);

    act(() => result.current.setWindowSize({ width: 0, height: 0 }));

    const updatedWidth = result.current.width;
    const updatedHeight = result.current.height;

    expect(updatedWidth).toBe(0);
    expect(updatedHeight).toBe(0);
  });
});
