import { heroRepository } from "@/modules/hero/hero.repository";

export const heroService = {
  getHeroes: (url: string, signal: AbortSignal) => {
    return heroRepository.getHeroes(url, signal);
  },
};
