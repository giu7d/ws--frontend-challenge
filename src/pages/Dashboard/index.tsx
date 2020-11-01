import React from "react";
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
					<div>Indicadores</div>
				</Tab>
				<Tab title="Atividade">
					<div>Atividade</div>
				</Tab>
			</Tabs>
		</Wrapper>
	);
};
