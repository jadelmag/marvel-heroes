import { Comic } from "@/modules/comic/comic.dto";
import { ComicResponse } from "@/modules/comic/comic.response.interface";
import { http } from "@/modules/global.service";

export const comicRepository = {
  getComic: async (fullUrl: string, signal: AbortSignal) => {
    const comics: Comic[] = (await http.get<ComicResponse>(fullUrl, signal))
      .data.results;
    if (comics.length === 0) return [];
    return comics.map(
      (comicDto): Comic => ({
        id: comicDto.id,
        digitalId: comicDto.digitalId,
        title: comicDto.title,
        issueNumber: comicDto.issueNumber,
        variantDescription: comicDto.variantDescription,
        description: comicDto.description,
        modified: comicDto.modified,
        isbn: comicDto.isbn,
        upc: comicDto.upc,
        diamondCode: comicDto.diamondCode,
        ean: comicDto.ean,
        issn: comicDto.issn,
        format: comicDto.format,
        pageCount: comicDto.pageCount,
        textObjects: comicDto.textObjects,
        resourceURI: comicDto.resourceURI,
        urls: comicDto.urls,
        series: comicDto.series,
        variants: comicDto.variants,
        collections: comicDto.collections,
        collectedIssues: comicDto.collectedIssues,
        dates: comicDto.dates,
        prices: comicDto.prices,
        thumbnail: comicDto.thumbnail,
        images: comicDto.images,
        creators: comicDto.creators,
        characters: comicDto.characters,
        stories: comicDto.stories,
        events: comicDto.events,
      })
    );
  },
};
