import { useHeroes } from "@/contexts/heroContext";
import { useLoader } from "@/contexts/loaderContext";
import { heroService } from "@/modules/hero/hero.service";
import { useCallback, useRef } from "react";

export const useFindHero = () => {
  const { setHeroes } = useHeroes();
  const { loading, setLoading } = useLoader();
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchFindHero = useCallback(async (url: string) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;
    const { signal } = controller;

    try {
      setHeroes([]);
      setLoading(true);
      const heroes = await heroService.getHeroes(url, signal);
      setHeroes(heroes);
    } catch (error) {
      setHeroes([]);
    } finally {
      setLoading(false);
    }
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [setHeroes, setLoading]);

  return { loading, fetchFindHero };
};
