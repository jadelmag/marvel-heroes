/* eslint-disable @typescript-eslint/no-explicit-any */
const headers = {
  "Content-Type": "application/json",
};

const get = async <T>(url: string, signal: AbortSignal) => {
  const response = await fetch(url, {
    method: "GET",
    headers,
    signal,
  });
  return (await response.json()) as T;
};

const post = async <T>(url: string, body: any, signal: AbortSignal) => {
  const response = await fetch(url, {
    method: "POST",
    headers,
    body,
    signal,
  });
  return (await response.json()) as T;
};

const put = async <T>(url: string, body: any, signal: AbortSignal) => {
  const response = await fetch(url, {
    method: "PUT",
    headers,
    body,
    signal,
  });
  return (await response.json()) as T;
};

const _delete = async <T>(url: string, signal: AbortSignal) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers,
    signal,
  });
  return (await response.json()) as T;
};

export const http = {
  get,
  post,
  put,
  delete: _delete,
};
