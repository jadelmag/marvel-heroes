import { comicRepository } from "@/modules/comic/comic.repository";

export const comicService = {
  getComic: (url: string) => {
    return comicRepository.getComic(url);
  },
};
