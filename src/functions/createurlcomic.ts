import {
  apiComicBaseURL,
  privateKey,
  publicKey,
} from "@/constants/apikeys.contants";
import md5 from "md5";

export const createComicURL = (comicId: string) => {
  // Get the current timestamp
  const ts: string = Date.now().toString();
  const hash: string = md5(ts + privateKey + publicKey);

  // Create a new URLSearchParams object and set the necessary query parameters
  const params = new URLSearchParams({
    ts: ts,
    apikey: publicKey,
    hash: hash,
  });
  // Generate hash for authentication
  // Construct the endpoint URL for searching comics with the query parameters
  const endpoint = `${apiComicBaseURL}/${comicId}?`;
  // Notice the question mark to start the query parameters.

  // Combine the endpoint URL with the query parameters to form the complete API request URL
  const url = endpoint + params;

  // Return the complete API request URL
  return url;
};
