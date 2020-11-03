import React, { useState, useEffect } from "react";

import { Activities } from "../../components/containers/Activities";
import { Indicators } from "../../components/containers/Indicators";
import { Information } from "../../components/containers/Information";
import { PlaceInformation } from "../../components/containers/PlaceInformation";
import { ProfileContainer } from "../../components/containers/Profile";
import { DashboardLayout } from "../../components/layouts/DashboardLayout";
import { Wrapper } from "./styles";

export const Dashboard: React.FC = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
	}, []);

	return (
		<Wrapper>
			<DashboardLayout
				isMobile={windowWidth <= 760}
				profile={<ProfileContainer />}
				information={<Information />}
				placeInformation={<PlaceInformation />}
				indicators={<Indicators />}
				activities={<Activities />}
			/>
		</Wrapper>
	);
};
