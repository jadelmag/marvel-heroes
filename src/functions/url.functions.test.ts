import md5 from "md5";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createComicURL, createURL } from "./url.functions";

const publicKey = "7e242a53b180d2bb15fa0f48015a20b6";
const privateKey = "55758a44501f44b63ddd7e164d033eb14ef8b6df";
const apiBaseURL = "https://gateway.marvel.com/v1/public";
const apiComicBaseURL = "https://gateway.marvel.com/v1/public/comics";

describe("createURL function", () => {
  let mockTs: string;
  let mockHash: string;

  beforeEach(() => {
    vi.clearAllMocks();
    // Mocking the current timestamp and hash
    mockTs = "1234567890";
    mockHash = md5(1234567890 + privateKey + publicKey);
    // Mock the current timestamp to be consistent
    vi.spyOn(Date, "now").mockReturnValue(Number(mockTs));
  });

  it("should create URL with a given name", () => {
    const name = "Spider-Man";
    const expectedURL = `${apiBaseURL}/characters?name=${name}&ts=${mockTs}&apikey=${publicKey}&hash=${mockHash}`;
    const result = createURL(name);

    expect(result).toBe(expectedURL);
  });

  it("should create URL without a name", () => {
    const expectedURL = `${apiBaseURL}/characters?limit=50&ts=${mockTs}&apikey=${publicKey}&hash=${mockHash}`;
    const result = createURL(null);

    expect(result).toBe(expectedURL);
  });

  it("should create URL with an empty name", () => {
    const expectedURL = `${apiBaseURL}/characters?limit=50&ts=${mockTs}&apikey=${publicKey}&hash=${mockHash}`;
    const result = createURL("");

    expect(result).toBe(expectedURL);
  });
});

describe("createComicURL function", () => {
  const publicKey = "7e242a53b180d2bb15fa0f48015a20b6";
  const privateKey = "55758a44501f44b63ddd7e164d033eb14ef8b6df";

  let mockTs: string;
  let mockHash: string;

  beforeEach(() => {
    vi.clearAllMocks();
    mockTs = "1234567890";
    mockHash = md5(1234567890 + privateKey + publicKey);
    vi.spyOn(Date, "now").mockReturnValue(Number(mockTs));
  });

  it("should create URL with a given comicId", () => {
    const comicId = "1234";
    const expectedURL = `${apiComicBaseURL}/${comicId}?ts=${mockTs}&apikey=${publicKey}&hash=${mockHash}`;
    const result = createComicURL(comicId);

    expect(result).toBe(expectedURL);
  });

  it("should create URL with an empty name", () => {
    const comicId = "";
    const expectedURL = `${apiComicBaseURL}/${comicId}?ts=${mockTs}&apikey=${publicKey}&hash=${mockHash}`;
    const result = createComicURL("");

    expect(result).toBe(expectedURL);
  });
});
