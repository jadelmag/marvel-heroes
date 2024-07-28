import { useHeroes } from "@/contexts/heroContext";
import { useLoader } from "@/contexts/loaderContext";
import { useTyping } from "@/contexts/typingContext";
import { createURL } from "@/functions/url.functions";
import { heroService } from "@/modules/hero/hero.service";
import { useEffect } from "react";


export const useLoadInitHeroes = () => {
  const { loading, setLoading } = useLoader();
  const { heroes, setHeroes } = useHeroes();
  const { typing } = useTyping();


  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const load50Heroes = async () => {
      try {
        setHeroes([]);
        setLoading(true);
        const url = createURL(null);
        const heroes = await heroService.getHeroes(url, signal);
        setHeroes(heroes);
      } catch (error) {
        setHeroes([]);
      } finally {
        setLoading(false);
      }
    };
    if (!loading && heroes.length === 0 && !typing) {
      load50Heroes();
    }
    if (typing) {
      controller.abort();
    }
    return () => {
      controller.abort();
    };
  }, [typing]);

 

  return { loading, heroes };
};
