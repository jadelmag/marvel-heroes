import {
  apiComicBaseURL,
  privateKey,
  publicKey,
} from "@/constants/apikeys.contants";
import { createComicURL } from "@/functions/createurlcomic";
import "@testing-library/jest-dom";
import md5 from "md5";
import { describe, expect, it, vi } from "vitest";

// Mock the `md5` function to return a predictable hash
vi.mock("md5", () => ({
  default: vi.fn().mockImplementation((input) => `mockedHash-${input}`),
}));

describe("createComicURL", () => {
  it("should generate the correct URL with the provided comic ID", () => {
    // Mock the Date.now() function to return a fixed timestamp
    const mockTimestamp = 1623855600000;
    vi.spyOn(Date, "now").mockReturnValue(mockTimestamp);

    // Define the comicId for the test
    const comicId = "12345";

    // Generate the expected URL using the mocked values
    const expectedHash = md5(`${mockTimestamp}${privateKey}${publicKey}`);
    const expectedUrl = `${apiComicBaseURL}/${comicId}?ts=${mockTimestamp}&apikey=${publicKey}&hash=${expectedHash}`;

    // Call the function with the test comicId
    const url = createComicURL(comicId);

    // Assert that the generated URL matches the expected URL
    expect(url).toBe(expectedUrl);
  });

  it("should include the correct query parameters", () => {
    const mockTimestamp = 1623855600000;
    vi.spyOn(Date, "now").mockReturnValue(mockTimestamp);

    const comicId = "67890";
    const url = createComicURL(comicId);

    // Verify that the URL includes the expected parameters
    const urlObj = new URL(url);
    expect(urlObj.searchParams.get("ts")).toBe(mockTimestamp.toString());
    expect(urlObj.searchParams.get("apikey")).toBe(publicKey);
    expect(urlObj.searchParams.get("hash")).toBe(
      md5(`${mockTimestamp}${privateKey}${publicKey}`)
    );
  });
});
