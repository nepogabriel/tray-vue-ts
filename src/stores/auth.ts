import { defineStore } from 'pinia'
import { setCookie, getCookie, removeCookie } from 'typescript-cookie'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: getCookie('my_api_token') || '',
    }),
    actions: {
        login(token: string) {
            this.token = token;
            setCookie('my_api_token', token);
        },
        logout() {
            this.token = '';
            removeCookie('my_api_token');
        }
    }
});