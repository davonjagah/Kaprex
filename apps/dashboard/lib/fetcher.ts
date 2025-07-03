import api from "./api";

export const backendUrl = process.env.NEXT_PUBLIC_BACKEND_AUTH_URL;

export const backendFetcher = async <T>(
  endpoint: string,
  token?: string,
  init?: RequestInit,
): Promise<T> => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // Only add the header if token is truthy
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${backendUrl}${endpoint}`, {
    headers,
    ...init,
  });

  if (!res.ok) {
    let errorMessage: string;
    try {
      const json = await res.json();
      errorMessage = json.error || JSON.stringify(json);
    } catch {
      errorMessage = await res.text().catch(() => res.statusText);
    }
    throw new Error(`Error ${res.status}: ${errorMessage}`);
  }

  return res.json();
};

export function postJSON<T, A>(url: string, body: A) {
  return backendFetcher<T>(url, undefined, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

export const swrFetcher = async <T>(url: string): Promise<T> => {
  const response = await api.get<T>(url);
  return response.data;
};
