import React from "react";
import { Shimmer } from ".";

export const InfosShimmer = () => {
	return (
		<>
			<Shimmer style={{ width: 250, height: 30, borderRadius: 8 }} />
			<Shimmer style={{ width: "75%", height: 18, borderRadius: 8 }} />
			<Shimmer style={{ width: "55%", height: 18, borderRadius: 8 }} />
			<Shimmer style={{ width: 150, height: 30, borderRadius: 8 }} />
			<Shimmer style={{ margin: 24, width: 54, height: 54, borderRadius: 8 }} />
		</>
	);
};
