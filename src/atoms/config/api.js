import axios from "axios";

export const TOKEN_LOCAL_STORAGE_KEY = 'token';

const token = () => localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY);

export const $api = axios.create({
    baseURL: 'https://128-project-backend.vercel.app/',
    headers: {
        Authorization: `Bearer ${token()}`
      }
})