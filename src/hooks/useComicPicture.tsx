import { FullComic } from "@/components/comiclist/comiclist";
import {
  getComicIds,
  getComicTitles,
} from "@/components/comiclist/comiclist.functions";
import { createComicURL } from "@/functions/url.functions";
import { Comic } from "@/modules/comic/comic.interface";
import { comicService } from "@/modules/comic/comic.service";
import { Comics } from "@/modules/hero/hero.interface";
import { useEffect, useRef, useState } from "react";

export const useComicPictures = (comics: Comics) => {
  const [imageComics, setImageComics] = useState<FullComic[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const getImages = (comics: Comic[]) => {
    return comics.map(
      (comic: Comic) => `${comic.thumbnail.path}.${comic.thumbnail.extension}`
    );
  };

  const createUnidimensionalArray = (images: string[][]) => {
    return images.reduce((acc, val) => acc.concat(val), []);
  };

  const createFullComic = (list: string[], comicTitles: string[]) => {
    return list.map((url, index) => ({
      name: comicTitles[index],
      url_picture: url,
    }));
  };

  useEffect(() => {
    const getAllImages = async () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      const controller = new AbortController();
      abortControllerRef.current = controller;
      const { signal } = controller;

      setLoading(true);
      try {
        if (!comics) return;
        const comicIds: string[] = getComicIds(comics);
        const comicTitles: string[] = getComicTitles(comics);

        const images = await Promise.all(
          comicIds.map(async (comicId: string) => {
            const comicUrl = createComicURL(comicId);
            const response: Comic[] = await comicService.getComic(comicUrl, signal);
            return getImages(response);
          })
        );
        const unidimensionalArray: string[] = createUnidimensionalArray(images);
        const fullImages = createFullComic(unidimensionalArray, comicTitles);

        setImageComics(fullImages);
      } catch (error) {
        setImageComics([]);
      } finally {
        setLoading(false);
      }
    };

    getAllImages();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [comics]);

  return { imageComics, loading };
};
