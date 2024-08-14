import { useFindComics } from "@/hooks/useFindComics";
import { HERO } from "@/mocks/hero.mock";
import { Comics } from "@/modules/hero/hero.dto";
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("useFindHero", () => {
  const comics: Comics = HERO.comics;

  it("should initially have loading as false", () => {
    const { result } = renderHook(() => useFindComics());
    expect(result.current.loading).toBe(false);
  });

  it("should set loading to true", () => {
    const { result } = renderHook(() => useFindComics());
    act(() => result.current.setLoading(true));
    expect(result.current.loading).toBe(true);
  });

  it("should set loading to true, call find comics", async () => {
    const { result } = renderHook(() => useFindComics());

    const fetchSpy = vi.fn();
    result.current.fetchFindComics = fetchSpy;

    await act(async () => {
      await result.current.fetchFindComics(comics);
    });

    expect(result.current.loading).toBe(false);
    expect(fetchSpy).toHaveBeenCalled();
  });

  it("should abort previous fetch requests on new fetch", async () => {
    const abortSpy = vi.fn();

    vi.spyOn(global, "AbortController").mockImplementation(() => {
      return { abort: abortSpy } as unknown as AbortController;
    });

    const { result } = renderHook(() => useFindComics());

    await act(async () => {
      await result.current.fetchFindComics(comics);
    });

    await act(async () => {
      await result.current.fetchFindComics(comics);
    });

    expect(abortSpy).toHaveBeenCalled();
  });
});
