import useSWR from "swr";

import { Activities } from "../models/Activities";
import { fetcher } from "../services/api";

export const useActivities = () => {
	const { data, error } = useSWR("/activities", fetcher);

	return {
		activities: data as Activities,
		isLoading: error || !data,
	};
};
