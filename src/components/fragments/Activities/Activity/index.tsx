import React, { ReactElement } from "react";

import { Wrapper } from "./styles";

interface IActivityProps {
	icon: ReactElement;
	title: string;
	color?:
		| "text"
		| "background"
		| "foreground"
		| "primary"
		| "success"
		| "warn"
		| "danger";
}

export const Activity: React.FC<IActivityProps> = ({
	icon,
	title,
	color = "primary",
	children,
}) => {
	return (
		<Wrapper color={color}>
			<div className="activity-header">
				<div className="activity-icon">{icon}</div>
				<h4>{title}</h4>
			</div>
			<div className="activity-content">{children}</div>
		</Wrapper>
	);
};
