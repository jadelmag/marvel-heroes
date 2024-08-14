import { useHeroes } from "@/context/herocontext";
import { Hero } from "@/modules/hero/hero.dto";
import { heroService } from "@/modules/hero/hero.service";
import { useCallback, useRef, useState } from "react";

export const useFindHero = () => {
  const { setHeroes } = useHeroes();
  const [loading, setLoading] = useState<boolean>(false);

  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchFindHero = useCallback(
    async (url: string) => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      const controller = new AbortController();
      abortControllerRef.current = controller;
      const { signal } = controller;

      try {
        setHeroes([]);
        setLoading(true);
        const heroes: Hero[] = await heroService.getHeroes(url, signal);
        setHeroes(heroes);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === "AbortError") {
            console.log("Request was aborted");
          } else {
            console.error("Error finding hero: ", error.message);
          }
        } else {
          console.error("An unknown error occurred:", error);
        }
        setHeroes([]);
      } finally {
        setLoading(false);
      }
    },
    [setHeroes]
  );

  return { loading, setLoading, fetchFindHero };
};
