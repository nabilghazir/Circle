import axios from "axios";

const BaseUrl = import.meta.env.VITE_BASE_URL;

export const apiV1 = axios.create({
    baseURL: `${BaseUrl}`
});
