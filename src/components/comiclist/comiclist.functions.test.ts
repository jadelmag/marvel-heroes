import {
  getComicIds,
  getComicTitles,
} from "@/components/comiclist/comiclist.functions";
import { Comics } from "@/modules/hero/hero.dto";
import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";

describe("getComicIds", () => {
  it("should return an array of comic IDs", () => {
    const comics: Comics = {
      available: 3,
      collectionURI: "http://gateway.marvel.com/v1/public/comics",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/12345",
          name: "Comic 1",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/67890",
          name: "Comic 2",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/54321",
          name: "Comic 3",
        },
      ],
      returned: 3,
    };

    const result = getComicIds(comics);
    expect(result).toEqual(["12345", "67890", "54321"]);
  });

  it("should return an empty array if no comics are present", () => {
    const comics: Comics = {
      available: 0,
      collectionURI: "",
      items: [],
      returned: 0,
    };

    const result = getComicIds(comics);
    expect(result).toEqual([]);
  });

  it("should handle cases where the resourceURI is invalid", () => {
    const comics: Comics = {
      available: 2,
      collectionURI: "http://gateway.marvel.com/v1/public/comics",
      items: [
        {
          resourceURI: "http://invalid-uri.com/comics/invalid",
          name: "Invalid Comic",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/99999",
          name: "Valid Comic",
        },
      ],
      returned: 2,
    };

    const result = getComicIds(comics);
    expect(result).toEqual(["99999"]); // La primera entrada será undefined debido a la URI inválida
  });
});

describe("getComicTitles", () => {
  it("should return an array of comic titles", () => {
    const comics: Comics = {
      available: 3,
      collectionURI: "http://gateway.marvel.com/v1/public/comics",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/12345",
          name: "Comic 1",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/67890",
          name: "Comic 2",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/54321",
          name: "Comic 3",
        },
      ],
      returned: 3,
    };

    const result = getComicTitles(comics);
    expect(result).toEqual(["Comic 1", "Comic 2", "Comic 3"]);
  });

  it("should return an empty array if no comics are present", () => {
    const comics: Comics = {
      available: 0,
      collectionURI: "",
      items: [],
      returned: 0,
    };

    const result = getComicTitles(comics);
    expect(result).toEqual([]);
  });
});
