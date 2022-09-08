import axios from "axios";

export const client = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "02961556-53bc-4585-b670-252d64d59f3a",
  },
});
