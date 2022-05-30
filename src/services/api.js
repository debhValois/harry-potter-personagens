import axios from "axios";

export const api = axios.create({
  baseURL: "https://apihp-blue.herokuapp.com/character",
});