import axios from "axios";

export const api = axios.create({
    baseURL: "https://trainee.fidelis.workers.dev/api",

    withCredentials: false,

    headers: {
        Authorization: "Bearer abafe709-66e2-4c6a-a964-5c64e3400303",
        "Content-Type": "application/json",
    },
});