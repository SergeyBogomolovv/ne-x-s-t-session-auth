import axios from "axios";

const apiUrl = process.env.API_URL || "http://localhost:4000";

export const $api = axios.create({
  withCredentials: true,
  baseURL: apiUrl,
});
