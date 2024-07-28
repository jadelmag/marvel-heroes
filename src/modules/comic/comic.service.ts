import { comicRepository } from "@/modules/comic/comic.repository";

export const comicService = {
  getComic: (url: string, signal: AbortSignal) => {
    return comicRepository.getComic(url, signal);
  },
};
