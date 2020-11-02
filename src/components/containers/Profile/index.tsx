import React from "react";
import { useAccount } from "../../../hooks/useCustomer";

import { Profile } from "../../fragments/Profile";
import { Shimmer } from "../../fragments/Shimmer";
import { Wrapper } from "./styles";

export const ProfileContainer: React.FC = () => {
	const { account, isLoading } = useAccount();

	if (isLoading) {
		return (
			<Wrapper>
				<div className="cover" />
				<div className="content profile-shimmer">
					<Shimmer style={{ width: 100, height: 100, borderRadius: 100 }} />
					<Shimmer style={{ width: 150, height: 30, borderRadius: 8 }} />
					<Shimmer style={{ width: 85, height: 18, borderRadius: 8 }} />
					<Shimmer style={{ width: 60, height: 24, borderRadius: 8 }} />
				</div>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<div className="cover" />
			<div className="content">
				<Profile
					avatar={account.avatar}
					companyName={account.company}
					fullName={`${account.firstName} ${account.lastName}`}
					isActive={account.isActive}
				/>
			</div>
		</Wrapper>
	);
};
