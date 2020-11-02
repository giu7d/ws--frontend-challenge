import React from "react";

import { Shimmer } from ".";
import { Card } from "../Card";

export const CardShimmer = () => {
	return (
		<Card
			title={<Shimmer style={{ width: 150, height: 30, borderRadius: 8 }} />}
		>
			<Shimmer style={{ width: "20%", height: 30, borderRadius: 8 }} />
			<Shimmer style={{ width: "100%", height: 24, borderRadius: 8 }} />
			<Shimmer style={{ width: "75%", height: 24, borderRadius: 8 }} />
			<Shimmer style={{ width: "100%", height: 24, borderRadius: 8 }} />
		</Card>
	);
};
