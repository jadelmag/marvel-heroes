import {
  apiBaseURL,
  privateKey,
  publicKey,
} from "@/constants/apikeys.contants";
import { createURL } from "@/functions/createurlhero";
import "@testing-library/jest-dom";
import md5 from "md5";
import { beforeAll, describe, expect, it, vi } from "vitest";

vi.mock("md5", () => ({
  default: vi.fn().mockImplementation((input) => `mockedHash-${input}`),
}));

describe("createURL", () => {
  const mockTimestamp = 1623855600000;

  beforeAll(() => {
    vi.spyOn(Date, "now").mockReturnValue(mockTimestamp);
  });

  it("should generate the correct URL when name is provided", () => {
    const name = "Spider-Man";

    const expectedHash = md5(`${mockTimestamp}${privateKey}${publicKey}`);
    const expectedUrl = `${apiBaseURL}/characters?name=${name}&ts=${mockTimestamp}&apikey=${publicKey}&hash=${expectedHash}`;

    const url = createURL(name);
    expect(url).toBe(expectedUrl);
  });

  it("should generate the correct URL when name is null", () => {
    const name = null;
    const expectedHash = md5(`${mockTimestamp}${privateKey}${publicKey}`);
    const expectedUrl = `${apiBaseURL}/characters?limit=50&ts=${mockTimestamp}&apikey=${publicKey}&hash=${expectedHash}`;

    const url = createURL(name);
    expect(url).toBe(expectedUrl);
  });

  it("should generate the correct URL when name is an empty string", () => {
    const name = "";
    const expectedHash = md5(`${mockTimestamp}${privateKey}${publicKey}`);
    const expectedUrl = `${apiBaseURL}/characters?limit=50&ts=${mockTimestamp}&apikey=${publicKey}&hash=${expectedHash}`;

    const url = createURL(name);
    expect(url).toBe(expectedUrl);
  });

  it("should include the correct query parameters", () => {
    const name = "Iron Man";
    const url = createURL(name);

    const urlObj = new URL(url);
    expect(urlObj.searchParams.get("ts")).toBe(mockTimestamp.toString());
    expect(urlObj.searchParams.get("apikey")).toBe(publicKey);
    expect(urlObj.searchParams.get("hash")).toBe(
      md5(`${mockTimestamp}${privateKey}${publicKey}`)
    );
  });
});
