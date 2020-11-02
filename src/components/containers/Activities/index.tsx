import React from "react";

import { ActivitiesTimeLine } from "./ActivitiesTimeLine";
import { ActivitiesFilters } from "./ActivitiesFilters";
import { useActivities } from "../../../hooks/useActivities";
import { FilterWrapper, TimeLineWrapper } from "./styles";

import { FilterShimmer } from "../../fragments/Shimmer/FilterShimmer";
import { TimeLineShimmer } from "../../fragments/Shimmer/TimeLineShimmer";

export const Activities: React.FC = () => {
	const { activities, isLoading } = useActivities();

	if (isLoading) {
		return (
			<>
				<FilterWrapper>
					<FilterShimmer />
				</FilterWrapper>
				<TimeLineWrapper>
					<TimeLineShimmer />
					<TimeLineShimmer />
				</TimeLineWrapper>
			</>
		);
	}

	return (
		<>
			<ActivitiesFilters items={activities.filters} />
			<ActivitiesTimeLine items={activities.items} />
		</>
	);
};
