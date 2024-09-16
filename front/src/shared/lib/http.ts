import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const $api = axios.create({
  withCredentials: true,
  baseURL: apiUrl,
});
