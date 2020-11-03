import React from "react";
import { FiMapPin } from "react-icons/fi";
import { useAccount } from "../../../hooks/useCustomer";

import { ListItem } from "../../fragments/ListItem";
import { Shimmer } from "../../fragments/Shimmer";
import { Wrapper } from "./styles";

export const PlaceInformation: React.FC = () => {
	const { account, isLoading } = useAccount();

	if (isLoading) {
		return (
			<Wrapper>
				<Shimmer style={{ width: 150, height: 24, borderRadius: 8 }} />
				<Shimmer style={{ width: "55%", height: 18, borderRadius: 8 }} />
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<h4 className="place-title">Local</h4>
			{account.addresses.map((address, index) => (
				<ListItem
					key={index}
					icon={<FiMapPin opacity={0.5} size={24} />}
					title={`${address.street}, ${address.number}`}
					subtitle={`${address.city} - ${address.uf}`}
					observation={address.type}
				/>
			))}
		</Wrapper>
	);
};
