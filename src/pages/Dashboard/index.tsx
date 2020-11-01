import React from "react";

import { Profile } from "./Profile";
import { Wrapper } from "./styles";

export const Dashboard: React.FC = () => {
	return (
		<Wrapper>
			<Profile />
			<div>Hello World</div>
		</Wrapper>
	);
};
