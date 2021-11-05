/* eslint-disable eqeqeq */
import axios from "axios";

const env = process.env.NODE_ENV;

export const baseURL =
  env == "production" ? process.env.REACT_APP_DEV : process.env.REACT_APP_DEV;

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
