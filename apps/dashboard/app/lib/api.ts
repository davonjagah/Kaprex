import { backendFetcher } from "./fetcher";

export function postJSON<T, A>(url: string, body: A) {
  return backendFetcher<T>(url, undefined, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}
