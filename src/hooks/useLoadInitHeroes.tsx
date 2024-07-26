import { useHeroes } from "@/contexts/heroContext";
import { useLoader } from "@/contexts/loaderContext";
import { createURL } from "@/functions/url.functions";
import { heroService } from "@/modules/hero/hero.service";
import { useEffect } from "react";

export const useLoadInitHeroes = () => {
  const { loading, setLoading } = useLoader();
  const { heroes, setHeroes } = useHeroes();

  useEffect(() => {
    const load50Heroes = async () => {
      setHeroes([]);
      setLoading(true);
      const url = createURL(null);
      const heroes = await heroService.getHeroes(url);
      setHeroes(heroes);
      setLoading(false);
    };
    if (!loading && heroes.length === 0) {
      load50Heroes();
    }
  }, []);

  return { loading, heroes };
};
