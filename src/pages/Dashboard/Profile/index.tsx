import React from "react";

import { Avatar } from "../../../components/Avatar";
import { Badge } from "../../../components/Badge";
import { Shimmer } from "../../../components/Shimmer";
import { ProfileInformationWrapper, Wrapper } from "./styles";

const account = {
	avatar: "https://avmstorage.blob.core.windows.net/ws-chalange/avatar.png",
	firstName: "Lorem",
	lastName: "Ipsum",
	company: "ACME Inc.",
	isActive: true,
};

export const Profile: React.FC = () => {
	if (!account) {
		return (
			<Wrapper>
				<div className="cover" />
				<div className="content">
					<ProfileInformationWrapper>
						<Shimmer style={{ width: 100, height: 100, borderRadius: 100 }} />
						<Shimmer style={{ width: 150, height: 30, borderRadius: 8 }} />
						<Shimmer style={{ width: 85, height: 18, borderRadius: 8 }} />
						<Shimmer style={{ width: 60, height: 24, borderRadius: 8 }} />
					</ProfileInformationWrapper>
				</div>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<div className="cover" />
			<div className="content">
				<ProfileInformationWrapper>
					<Avatar src={account.avatar} />
					<h2 className="fullName">{`${account.firstName} ${account.lastName}`}</h2>
					<h3 className="companyName">{account.company}</h3>
					{account.isActive ? (
						<Badge color="success">Ativo</Badge>
					) : (
						<Badge color="danger">Inativo</Badge>
					)}
				</ProfileInformationWrapper>
			</div>
		</Wrapper>
	);
};
