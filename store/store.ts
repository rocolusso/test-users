import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useLoggedStore = create(

  persist(
    (set) => ({
      isLogged: false,
      tryLogin: () => set({ isLogged: true }),
      removeLogin: () => set({ isLogged: false }),
    }),

    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    },

  ),

);

export default useLoggedStore;
