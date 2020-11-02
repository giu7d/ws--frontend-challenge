import React, { ReactElement } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { IconButton } from "../Buttons/IconButton";

import { Wrapper } from "./styles";

interface IProps {
	title: string | ReactElement;
	onClick?: () => void;
}

export const Card: React.FC<IProps> = ({
	title,
	children,
	onClick = () => {},
}) => {
	return (
		<Wrapper>
			<div className="card-header">
				<h4>{title}</h4>
				<IconButton onClick={onClick} className="card-icon">
					<FiMoreVertical />
				</IconButton>
			</div>
			<div className="card-content">{children}</div>
		</Wrapper>
	);
};
