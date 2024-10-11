import axios from 'axios';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const client = axios.create({ baseURL: API_URL, withCredentials: true });

export const R2_URL = process.env.NEXT_PUBLIC_R2_URL;
export const getR2URL = (src: string) => R2_URL + src;
