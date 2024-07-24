import { heroRepository } from "@/modules/hero/hero.repository";

export const heroService = {
  getHeroes: (url: string) => {
    return heroRepository.getHeroes(url);
  },
};
