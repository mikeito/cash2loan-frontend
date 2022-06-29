import create from "zustand";
import { persist, devtools } from "zustand/middleware"

const userStore = create(devtools(
    persist(
        (set) => ({
            user: null,
            setUser: (usr) => set((state) => ({ user: usr })),
            clearUser: () => set({ user: null }),
        })
    )
))

export default userStore