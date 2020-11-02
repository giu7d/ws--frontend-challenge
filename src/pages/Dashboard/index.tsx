import React from "react";
import { Activities } from "../../components/containers/Activities";
import { Indicators } from "../../components/containers/Indicators";
import { Information } from "../../components/containers/Information";

import { ProfileContainer } from "../../components/containers/Profile";
import { Tabs } from "../../components/containers/Tabs";
import { Tab } from "../../components/fragments/Tab";
import { Wrapper } from "./styles";

export const Dashboard: React.FC = () => {
	return (
		<Wrapper>
			<ProfileContainer />
			<Tabs>
				<Tab title="Informações">
					<Information />
				</Tab>
				<Tab title="Indicadores">
					<Indicators />
				</Tab>
				<Tab title="Atividades">
					<Activities />
				</Tab>
			</Tabs>
		</Wrapper>
	);
};
