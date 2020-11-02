import React from "react";
import { Wrapper, BadgeWrapper } from "./styles";

interface IProps {
	title: string;
	value?: string;
	badgeValue: string;
	badgeColor?:
		| "text"
		| "background"
		| "foreground"
		| "primary"
		| "success"
		| "warn"
		| "danger";
	elevation?: boolean;
}

export const BadgeWithText: React.FC<IProps> = ({
	value = null,
	badgeColor = "primary",
	elevation = false,
	...props
}) => {
	return (
		<Wrapper dropShadow={elevation}>
			<BadgeWrapper color={badgeColor}>{props.badgeValue}</BadgeWrapper>
			<div className="badge-content">
				<span className="badge-title">{props.title}</span>
				{value && <span className="badge-value">{value}</span>}
			</div>
		</Wrapper>
	);
};
