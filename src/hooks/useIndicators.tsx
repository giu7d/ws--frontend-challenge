import useSWR from "swr";

import { GenericIndicator } from "../models/Indicator";
import { fetcher } from "../services/api";

export const useIndicators = () => {
	const { data, error } = useSWR("/indicators", fetcher);

	return {
		indicators: data as GenericIndicator[],
		isLoading: !error && !data,
		isError: error,
	};
};
