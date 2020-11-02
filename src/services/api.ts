import Axios, { AxiosRequestConfig } from "axios";

const { REACT_APP_API_URL } = process.env;

export const API = Axios.create({
	baseURL: REACT_APP_API_URL,
});

export const fetcher = (url: string, configs?: AxiosRequestConfig) =>
	API.get(url, configs).then((res) => res.data);
