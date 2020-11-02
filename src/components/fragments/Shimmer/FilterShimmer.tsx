import React from "react";

import { Shimmer } from ".";

export const FilterShimmer = () => {
	return (
		<>
			<Shimmer style={{ width: 100, height: 50, borderRadius: 8 }} />
			<Shimmer style={{ width: 100, height: 50, borderRadius: 8 }} />
			<Shimmer style={{ width: 100, height: 50, borderRadius: 8 }} />
		</>
	);
};
