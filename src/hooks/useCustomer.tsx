import useSWR from "swr";

import { Account } from "../models/Customer";
import { fetcher } from "../services/api";

export const useAccount = (id = 0) => {
	const { data, error } = useSWR(`/customer/${id}`, fetcher);

	return {
		account: data as Account,
		isLoading: !error && !data,
		isError: error,
	};
};
