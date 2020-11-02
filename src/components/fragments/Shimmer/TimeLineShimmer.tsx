import React from "react";

import { Shimmer } from ".";

export const TimeLineShimmer = () => {
	return (
		<>
			<Shimmer style={{ width: 120, height: 48, borderRadius: 8 }} />
			<Shimmer
				style={{
					marginTop: 24,
					marginLeft: 24,
					width: "80%",
					height: 24,
					borderRadius: 8,
				}}
			/>
			<Shimmer
				style={{
					marginLeft: 24,
					width: "80%",
					height: 24,
					borderRadius: 8,
				}}
			/>
			<Shimmer
				style={{
					marginLeft: 24,
					width: "80%",
					height: 24,
					borderRadius: 8,
				}}
			/>
		</>
	);
};
