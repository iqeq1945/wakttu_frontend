import axios from "axios";
import io from "socket.io-client";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const SOCKET = io(`${API_URL}/wakttu`);

export const client = axios.create({ baseURL: API_URL, withCredentials: true });
