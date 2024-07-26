import { describe, expect, it } from "vitest";
import { Comics } from "../../modules/hero/hero.interface";
import { getComicIds, getComicTitles } from "./comiclist.functions";

describe("getComicIds", () => {
  it("should extract comic ids from resourceURI", () => {
    const comics: Comics = {
      available: 3,
      collectionURI: "http://example.com/api/comics",
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
          resourceURI: "http://gateway.marvel.com/v1/public/comics/13579",
          name: "Comic 3",
        },
      ],
      returned: 3,
    };

    const expected = ["12345", "67890", "13579"];
    const result = getComicIds(comics);
    expect(result).toEqual(expected);
  });

  it("should handle empty items array", () => {
    const comics: Comics = {
      available: 0,
      collectionURI: "http://example.com/api/comics",
      items: [],
      returned: 0,
    };

    const expected: string[] = [];
    const result = getComicIds(comics);
    expect(result).toEqual(expected);
  });

  it("should handle invalid resourceURI", () => {
    const comics: Comics = {
      available: 2,
      collectionURI: "http://example.com/api/comics",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/invalid-id",
          name: "Comic 1",
        },
        {
          resourceURI: "invalid-url",
          name: "Comic 2",
        },
      ],
      returned: 2,
    };

    const expected = ["invalid-id", "invalid-url"];
    const result = getComicIds(comics);
    expect(result).toEqual(expected);
  });
});

describe("getComicTitles", () => {
  it("should extract comic titles from comics items", () => {
    const comics: Comics = {
      available: 3,
      collectionURI: "http://example.com/api/comics",
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
          resourceURI: "http://gateway.marvel.com/v1/public/comics/13579",
          name: "Comic 3",
        },
      ],
      returned: 3,
    };

    const expected = ["Comic 1", "Comic 2", "Comic 3"];
    const result = getComicTitles(comics);
    expect(result).toEqual(expected);
  });

  it("should handle empty items array", () => {
    const comics: Comics = {
      available: 0,
      collectionURI: "http://example.com/api/comics",
      items: [],
      returned: 0,
    };

    const expected: string[] = [];
    const result = getComicTitles(comics);
    expect(result).toEqual(expected);
  });

  it("should handle items with empty names", () => {
    const comics: Comics = {
      available: 2,
      collectionURI: "http://example.com/api/comics",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/12345",
          name: "",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/67890",
          name: "Comic 2",
        },
      ],
      returned: 2,
    };

    const expected = ["", "Comic 2"];
    const result = getComicTitles(comics);
    expect(result).toEqual(expected);
  });

  it("should handle items with missing names", () => {
    const comics: Comics = {
      available: 2,
      collectionURI: "http://example.com/api/comics",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/12345",
          name: "Comic 1",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/67890",
          name: "",
        },
      ],
      returned: 2,
    };

    const expected = ["Comic 1", ""];
    const result = getComicTitles(comics);
    expect(result).toEqual(expected);
  });
});
