import type { AxiosError } from "axios";
import axios from "axios";
import { toast } from "react-toastify";

// Événement personnalisé pour la session expirée
export const SESSION_EXPIRED_EVENT = "auth:session-expired";

export function dispatchSessionExpired() {
  window.dispatchEvent(new CustomEvent(SESSION_EXPIRED_EVENT));
}

export function extractAxiosErrorMsg(error: unknown): string {
  if (axios.isAxiosError?.(error)) {
    const err = error as AxiosError;
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
if (globalThis.window !== undefined) {
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
  const token = sessionStorage.getItem("access_token");
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor pour gérer globalement les erreurs, y compris l'expiration du token
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    /**
     * The regex is used to match the forbidden URLs in the error config URL.
     * It can catch dynamic url like "/auth/register/confirm?token=a-random-token"
     */
    const forbiddenUrl = ["/auth/register", "/auth/login", "/auth/forgot-password"].join("|");
    const forbiddenUrlRegex = new RegExp(forbiddenUrl, "g");
    if (error.config.url.match(forbiddenUrlRegex)) {
      return Promise.reject(error);
    }

    const resp = error.response;
    // Gestion de l'expiration du token (401)
    if (resp && resp.status === 401) {
      sessionStorage.removeItem("access_token");
      sessionStorage.removeItem("refresh_token");
      toast.error("Session expirée. Veuillez vous reconnecter. AxiosClient");
      dispatchSessionExpired();
      return Promise.reject(error);
    }

    const normalized = normalizeErrorsFromResponse(resp);
    if (normalized.length > 0) {
      // attach for callers
      error.normalizedErrors = normalized;
      // show each message in its own toast
      normalized.forEach((ne) => toast.error(ne.message));
    } else {
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
      message: typeof obj.message === "string" ? obj.message : JSON.stringify(obj),
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
