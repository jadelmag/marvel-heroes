import { FullComic } from "@/components/comiclist/comiclist";
import {
  getComicIds,
  getComicTitles,
} from "@/components/comiclist/comiclist.functions";
import { createComicURL } from "@/functions/url.functions";
import { Comic } from "@/modules/comic/comic.interface";
import { comicService } from "@/modules/comic/comic.service";
import { Comics } from "@/modules/hero/hero.interface";
import { useEffect, useState } from "react";

export const useComicPictures = (comics: Comics) => {
  const [imageComics, setImageComics] = useState<FullComic[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getImages = (comics: Comic[]) => {
    const images: string[] = comics.map(
      (comic: Comic) => `${comic.thumbnail.path}.${comic.thumbnail.extension}`
    );
    return images;
  };

  const createUnidimensionalArray = (images: string[][]) => {
    const unidimensionalArray: string[] = images.reduce(
      (acc, val) => acc.concat(val),
      []
    );
    return unidimensionalArray;
  };

  const createFullComic = (list: string[], comicTitles: string[]) => {
    let fullImages: FullComic[] = [];
    list.forEach((url: string, index: number) => {
      const fullData: FullComic = {
        name: comicTitles[index],
        url_picture: url,
      };
      fullImages.push(fullData);
    });
    return fullImages;
  };

  useEffect(() => {
    const getAllImages = async () => {
      setLoading(true);
      if (!comics) return;
      const comicIds: string[] = getComicIds(comics);
      const comicTitles: string[] = getComicTitles(comics);

      const images = await Promise.all(
        comicIds.map(async (comicId: string) => {
          const comicUrl = createComicURL(comicId);
          const response: Comic[] = await comicService.getComic(comicUrl);
          const images = getImages(response);
          return images;
        })
      );
      const unidimensionalArray: string[] = createUnidimensionalArray(images);
      const fullImages = createFullComic(unidimensionalArray, comicTitles);

      setImageComics(fullImages);
      setLoading(false);
    };
    getAllImages();
  }, []);

  return { imageComics, loading };
};
