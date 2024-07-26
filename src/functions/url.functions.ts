import md5 from "md5";

const publicKey = "7e242a53b180d2bb15fa0f48015a20b6";
const privateKey = "55758a44501f44b63ddd7e164d033eb14ef8b6df";
const apiBaseURL = "https://gateway.marvel.com/v1/public";
const apiComicBaseURL = "https://gateway.marvel.com/v1/public/comics";

export const createURL = (name: string | null) => {
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
  const endpoint =
    name === null || name === ""
      ? `${apiBaseURL}/characters?limit=50&`
      : `${apiBaseURL}/characters?name=${name}&`;
  // Notice the question mark to start the query parameters.

  // Combine the endpoint URL with the query parameters to form the complete API request URL
  const url = endpoint + params;

  // Return the complete API request URL
  return url;
};

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
