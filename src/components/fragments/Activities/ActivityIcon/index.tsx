import React from "react";
import { FiCalendar, FiMail, FiPhone } from "react-icons/fi";
import { useTheme } from "styled-components";
import { darken } from "polished";

interface IActivityIconProps {
	type: string;
	color: "danger" | "warn" | "success" | "primary";
}

export const ActivityIcon: React.FC<IActivityIconProps> = ({ type, color }) => {
	const theme = useTheme() as ITheme;

	const props = {
		size: 18,
		color: darken(0.25, theme.colors[color]),
	};

	if (type === "call") {
		return <FiPhone {...props} />;
	}

	if (type === "appointment") {
		return <FiCalendar {...props} />;
	}

	if (type === "mail") {
		return <FiMail {...props} />;
	}

	return null;
};
