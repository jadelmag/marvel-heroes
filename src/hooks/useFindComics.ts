import { FullComic } from "@/components/comiclist/comiclist";
import {
  getComicIds,
  getComicTitles,
} from "@/components/comiclist/comiclist.functions";
import { createComicURL } from "@/functions/createurlcomic";
import { Comic } from "@/modules/comic/comic.dto";
import { comicService } from "@/modules/comic/comic.service";
import { Comics } from "@/modules/hero/hero.dto";
import { useCallback, useEffect, useRef, useState } from "react";

export const useFindComics = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [covers, setCovers] = useState<FullComic[]>([]);
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

  const fetchFindComics = useCallback(async (comics: Comics) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;
    const { signal } = controller;

    try {
      if (!comics) return;
      setLoading(true);
      const comicIds: string[] = getComicIds(comics);
      const comicTitles: string[] = getComicTitles(comics);

      const images: string[][] = await Promise.all(
        comicIds.map(async (comicId: string) => {
          const comicUrl = createComicURL(comicId);
          const response: Comic[] = await comicService.getComic(
            comicUrl,
            signal
          );
          return getImages(response);
        })
      );
      const unidimensionalArray: string[] = createUnidimensionalArray(images);
      const fullImages = createFullComic(unidimensionalArray, comicTitles);
      setCovers(fullImages);
      setLoading(false);
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
    }
  }, []);

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return { covers, loading, fetchFindComics, setLoading, setCovers };
};
