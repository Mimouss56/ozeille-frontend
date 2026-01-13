import { create } from "zustand";

import type { UserStoreState } from "../@types/user.d.ts";
import { axiosClient, extractAxiosErrorMsg } from "../utils/axiosClient";

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
    } catch (error) {
      const msg = extractAxiosErrorMsg(error);
      set({ error: msg, loading: false, user: null });
      return null;
    }
  },
}));
