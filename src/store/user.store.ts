import { create } from "zustand";

import type { UserStoreState } from "../@types/user.d.ts";
import { axiosClient } from "../utils/axiosClient.ts";

export const useUserStore = create<UserStoreState>((set) => ({
  user: null,
  loading: false,
  error: null,
  fetchUser: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const { data } = await axiosClient.get(`/users/${id}`);
      set({ user: data, loading: false });
      return data;
    } catch (e: any) {
      set({ error: e?.message || "Erreur inconnue", loading: false, user: null });
      return null;
    }
  },
}));
