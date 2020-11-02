import React from "react";

import { BadgeWithText } from "../../fragments/Badges/BadgeWithText";
import { FilterWrapper } from "./styles";

interface IActivitiesFiltersProps {
	items: {
		title: string;
		value: number;
		color: string;
	}[];
}

export const ActivitiesFilters: React.FC<IActivitiesFiltersProps> = ({
	items = [],
}) => {
	return (
		<FilterWrapper>
			{items.map(({ value, title, color }, index) => (
				<BadgeWithText
					key={index}
					title={title}
					badgeColor={
						color as
							| "text"
							| "background"
							| "foreground"
							| "primary"
							| "success"
							| "warn"
							| "danger"
					}
					badgeValue={value.toString()}
					elevation
				/>
			))}
		</FilterWrapper>
	);
};
