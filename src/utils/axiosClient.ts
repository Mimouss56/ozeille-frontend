import axios from "axios";
import type { AxiosError } from "axios";
import { toast } from "react-toastify";

export function extractAxiosErrorMsg(error: unknown): string {
  if (axios.isAxiosError && axios.isAxiosError(error)) {
    const err = error as AxiosError;
    console.log(err);

    const data = err.response?.data as Record<string, unknown> | undefined;
    if (data && typeof data === "object" && typeof data.message === "string") {
      return data.message;
    } else if (typeof err.message === "string") {
      return err.message;
    }
  } else if (typeof (error as { message?: unknown })?.message === "string") {
    return (error as { message: string }).message;
  }
  return "Erreur inconnue";
}

// Log the resolved base URL to help debug configuration issues in environments
// (This will appear in the browser console or server logs depending on build)
if (typeof window !== "undefined") {
  console.debug("API base URL:", import.meta.env.VITE_API_URL);
}
export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor pour ajouter le JWT dans chaque requête
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor pour gérer globalement les erreurs
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    try {
      const resp = error.response;
      const normalized = normalizeErrorsFromResponse(resp);
      if (normalized.length > 0) {
        // attach for callers
        error.normalizedErrors = normalized;
        // show each message in its own toast
        normalized.forEach((ne) => toast.error(ne.message));
      } else {
        const statusText = resp && resp.statusText;
        toast.error(statusText || "Erreur lors de la requête");
      }
    } catch {
      toast.error("Erreur lors de la requête");
    }

    return Promise.reject(error);
  },
);

export type NormalizedError = { message: string; path?: string[]; code?: string };

export function normalizeErrorsFromResponse(resp: unknown): NormalizedError[] {
  if (!resp || typeof resp !== "object") return [];

  // AxiosError<{ ... }> ou tout objet avec .data
  let body: Record<string, unknown> | undefined;
  if ("data" in resp && typeof (resp as { data?: unknown }).data === "object") {
    body = (resp as { data?: Record<string, unknown> }).data;
  }
  if (!body) return [];

  // If body has errors array (Zod ou format normalisé)
  if (Array.isArray(body.errors) && body.errors.length > 0) {
    return (body.errors as Array<Record<string, unknown>>).map((obj) => ({
      message: typeof obj.message === "string" ? obj.message : String(obj),
      path: Array.isArray(obj.path) ? obj.path.map(String) : undefined,
      code: typeof obj.code === "string" ? obj.code : undefined,
    }));
  }

  // If body has single error property
  if (typeof body.error === "string") return [{ message: body.error }];

  // If body has message
  if (typeof body.message === "string") return [{ message: body.message }];

  return [];
}
