import React, { ReactElement } from "react";
import { Tabs } from "../../containers/Tabs";
import { Tab } from "../../fragments/Tab";

interface IDashboardLayoutProps {
	isMobile?: boolean;
	profile: ReactElement;
	information: ReactElement;
	placeInformation: ReactElement;
	indicators: ReactElement;
	activities: ReactElement;
}

export const DashboardLayout: React.FC<IDashboardLayoutProps> = ({
	isMobile = false,
	...props
}) => {
	if (isMobile) {
		return (
			<>
				{props.profile}
				<Tabs>
					<Tab title="Informações">
						{props.information}
						{props.placeInformation}
					</Tab>
					<Tab title="Indicadores">{props.indicators}</Tab>
					<Tab title="Atividades">{props.activities}</Tab>
				</Tabs>
			</>
		);
	}

	return (
		<>
			<span className="profile-container">
				{props.profile}
				{props.information}
				{props.placeInformation}
			</span>
			{props.indicators}
			{props.activities}
		</>
	);
};
