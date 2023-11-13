// stores/auth.ts
import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        token: null as string | null,
    }),
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
    actions: {
        setToken(newToken: string) {
            this.token = newToken;
        },
        clearToken() {
            this.token = null;
        },
    },
});