import { FavHero } from "@/context/favcontext";
import { updateFavHero } from "@/functions/updatefavhero.functions";
import { Hero } from "@/modules/hero/hero.dto";
import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";

describe("updateFavHero", () => {
  const heroes: Hero[] = [
    {
      id: 1,
      name: "Spider-Man",
      description: "A hero with spider-like abilities.",
      modified: "2021-05-04T10:00:00-0400",
      thumbnail: { path: "spiderman", extension: "jpg" },
      resourceURI: "http://example.com/spiderman",
      comics: {
        available: 100,
        collectionURI: "",
        items: [],
        returned: 100,
      },
      series: {
        available: 50,
        collectionURI: "",
        items: [],
        returned: 50,
      },
      stories: {
        available: 80,
        collectionURI: "",
        items: [],
        returned: 80,
      },
      events: {
        available: 20,
        collectionURI: "",
        items: [],
        returned: 20,
      },
      urls: [],
    },
    {
      id: 2,
      name: "Iron Man",
      description: "A hero with an advanced suit of armor.",
      modified: "2021-05-04T10:00:00-0400",
      thumbnail: { path: "ironman", extension: "jpg" },
      resourceURI: "http://example.com/ironman",
      comics: {
        available: 150,
        collectionURI: "",
        items: [],
        returned: 150,
      },
      series: {
        available: 60,
        collectionURI: "",
        items: [],
        returned: 60,
      },
      stories: {
        available: 90,
        collectionURI: "",
        items: [],
        returned: 90,
      },
      events: {
        available: 30,
        collectionURI: "",
        items: [],
        returned: 30,
      },
      urls: [],
    },
  ];

  it("should add a new hero to the favorites list", () => {
    const favs: FavHero[] = [];

    const updatedFavs = updateFavHero(heroes, favs, 1);

    expect(updatedFavs).toHaveLength(1);
    expect(updatedFavs[0]).toMatchObject({
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
    });
  });

  it("should remove an existing hero from the favorites list", () => {
    const favs: FavHero[] = [
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
    ];

    const updatedFavs = updateFavHero(heroes, favs, 1);

    expect(updatedFavs).toHaveLength(0);
  });

  it("should not modify the favorites list if the hero is not found in the heroes array", () => {
    const favs: FavHero[] = [
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
    ];

    const updatedFavs = updateFavHero(heroes, favs, 3); // Hero with id 3 does not exist in heroes array

    expect(updatedFavs).toEqual(favs);
  });

  it("should add a different hero to the favorites list", () => {
    const favs: FavHero[] = [
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
    ];

    const updatedFavs = updateFavHero(heroes, favs, 2);

    expect(updatedFavs).toHaveLength(2);
    expect(updatedFavs[1]).toMatchObject({
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
    });
  });
});
