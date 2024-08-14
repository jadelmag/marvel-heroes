import { useFindHero } from "@/hooks/useFindHero";
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("useFindHero", () => {
  it("should initially have loading as false", () => {
    const { result } = renderHook(() => useFindHero());
    expect(result.current.loading).toBe(false);
  });

  it("should set loading to true", () => {
    const { result } = renderHook(() => useFindHero());
    act(() => result.current.setLoading(true));
    expect(result.current.loading).toBe(true);
  });

  it("should set loading to true, call service and update heroes", async () => {
    const mockUrl = "https://example.com/heroes";
    const { result } = renderHook(() => useFindHero());

    const fetchSpy = vi.fn();
    result.current.fetchFindHero = fetchSpy;

    await act(async () => {
      await result.current.fetchFindHero(mockUrl);
    });

    expect(result.current.loading).toBe(false);
    expect(fetchSpy).toHaveBeenCalled();
  });

  it("should abort previous fetch requests on new fetch", async () => {
    const abortSpy = vi.fn();
    const mockUrl = "https://example.com/heroes";

    vi.spyOn(global, "AbortController").mockImplementation(() => {
      return { abort: abortSpy } as unknown as AbortController;
    });

    const { result } = renderHook(() => useFindHero());

    await act(async () => {
      await result.current.fetchFindHero(mockUrl);
    });

    await act(async () => {
      await result.current.fetchFindHero(mockUrl);
    });

    expect(abortSpy).toHaveBeenCalled();
  });
});
