import React from "react";

interface ITabProps {
	title: string;
}

export const Tab: React.FC<ITabProps> = ({ children }) => {
	return <div>{children}</div>;
};
