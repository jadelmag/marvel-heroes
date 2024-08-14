import { FavHero } from "@/context/favcontext";
import { filterHeroes } from "@/functions/filterheroes.functions";
import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";

describe("filterHeroes", () => {
  const heroes: FavHero[] = [
    {
      id: 1,
      name: "Spider-Man",
      picture: "spiderman.jpg",
      description: "A hero with spider-like abilities.",
      comics: {
        available: 100,
        collectionURI: "",
        items: [],
        returned: 100,
      },
    },
    {
      id: 2,
      name: "Iron Man",
      picture: "ironman.jpg",
      description: "A hero with an advanced suit of armor.",
      comics: {
        available: 150,
        collectionURI: "",
        items: [],
        returned: 150,
      },
    },
    {
      id: 3,
      name: "Captain America",
      picture: "captainamerica.jpg",
      description: "A super-soldier with an indestructible shield.",
      comics: {
        available: 200,
        collectionURI: "",
        items: [],
        returned: 200,
      },
    },
  ];

  it("should return all heroes if text is undefined", () => {
    const result = filterHeroes(heroes, undefined);
    expect(result).toEqual(heroes);
  });

  it("should return all heroes if text is an empty string", () => {
    const result = filterHeroes(heroes, "");
    expect(result).toEqual(heroes);
  });

  it("should return heroes that match the text partially or fully", () => {
    let result = filterHeroes(heroes, "spider");
    expect(result).toEqual([heroes[0]]);

    result = filterHeroes(heroes, "iron");
    expect(result).toEqual([heroes[1]]);

    result = filterHeroes(heroes, "captain");
    expect(result).toEqual([heroes[2]]);
  });

  it("should be case insensitive", () => {
    let result = filterHeroes(heroes, "SPIDER");
    expect(result).toEqual([heroes[0]]);

    result = filterHeroes(heroes, "iron");
    expect(result).toEqual([heroes[1]]);

    result = filterHeroes(heroes, "CAPTAIN");
    expect(result).toEqual([heroes[2]]);
  });

  it("should return an empty array if no heroes match the text", () => {
    const result = filterHeroes(heroes, "batman");
    expect(result).toEqual([]);
  });
});
