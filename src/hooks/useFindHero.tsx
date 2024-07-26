import { useHeroes } from "@/contexts/heroContext";
import { useLoader } from "@/contexts/loaderContext";
import { heroService } from "@/modules/hero/hero.service";
import { useCallback } from "react";

export const useFindHero = () => {
  const { setHeroes } = useHeroes();
  const { setLoading } = useLoader();

  const fetchFindHero = useCallback(async (url: string) => {
    try {
      setHeroes([]);
      setLoading(true);

      const heroes = await heroService.getHeroes(url);
      setHeroes(heroes);
    } catch (ex) {
      console.error(ex);
    } finally {
      setLoading(false);
    }
  }, []);

  return { fetchFindHero };
};
