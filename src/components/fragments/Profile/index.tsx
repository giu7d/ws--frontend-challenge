import React from "react";

import { Avatar } from "../Avatar";
import { Badge } from "../Badges/Badge";
import { Wrapper } from "./styles";

interface IProfileProps {
	avatar: string;
	fullName: string;
	companyName: string;
	isActive: boolean;
}

export const Profile: React.FC<IProfileProps> = (props) => {
	return (
		<Wrapper>
			<Avatar src={props.avatar} />
			<h2 className="profile-fullName">{props.fullName}</h2>
			<h3 className="profile-companyName">{props.companyName}</h3>
			{props.isActive ? (
				<Badge color="success">Ativo</Badge>
			) : (
				<Badge color="danger">Inativo</Badge>
			)}
		</Wrapper>
	);
};
