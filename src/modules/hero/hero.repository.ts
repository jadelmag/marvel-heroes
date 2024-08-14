import { http } from "@/modules/global.service";
import { Hero } from "@/modules/hero/hero.dto";
import { Response } from "@/modules/hero/hero.response.interface";

export const heroRepository = {
  getHeroes: async (fullUrl: string, signal: AbortSignal) => {
    const heroes: Hero[] = (await http.get<Response>(fullUrl, signal)).data
      .results;
    if (heroes.length === 0) return [];
    return heroes.map(
      (heroDto): Hero => ({
        id: heroDto.id,
        name: heroDto.name,
        description: heroDto.description,
        modified: heroDto.modified,
        thumbnail: heroDto.thumbnail,
        resourceURI: heroDto.resourceURI,
        comics: heroDto.comics,
        series: heroDto.series,
        stories: heroDto.stories,
        events: heroDto.events,
        urls: heroDto.urls,
      })
    );
  },
};
