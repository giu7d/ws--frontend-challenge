import React from "react";
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiMail,
	FiMapPin,
	FiPhone,
	FiTwitter,
} from "react-icons/fi";

import { useAccount } from "../../../hooks/useCustomer";
import { SocialButton } from "../../fragments/Buttons/SocialButton";
import { ListItem } from "../../fragments/ListItem";
import { InfosShimmer } from "../../fragments/Shimmer/InfosShimmer";
import { SideScroll } from "../../fragments/SideScroll";
import { Wrapper } from "./styles";

export const Information: React.FC = () => {
	const { account, isLoading } = useAccount();

	if (isLoading) {
		return (
			<Wrapper>
				<InfosShimmer />
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			{account.contact.phones.map((phone, index) => (
				<ListItem
					key={index}
					icon={<FiPhone opacity={0.5} size={24} />}
					title={phone.value}
					subtitle={phone.type}
				/>
			))}
			{account.contact.emails.map((mail, index) => (
				<ListItem
					key={index}
					icon={<FiMail opacity={0.5} size={24} />}
					title={mail.value}
					subtitle={mail.type}
				/>
			))}
			{account.contact.socialNetworks && (
				<SideScroll>
					{account.contact.socialNetworks?.facebookURL && (
						<SocialButton backgroundColor="#4A6DE7">
							<FiFacebook size={24} />
						</SocialButton>
					)}
					{account.contact.socialNetworks?.instagramURL && (
						<SocialButton backgroundColor="#FF6B7D">
							<FiInstagram size={24} />
						</SocialButton>
					)}
					{account.contact.socialNetworks?.twitterURL && (
						<SocialButton backgroundColor="#4AD4E7">
							<FiTwitter size={24} />
						</SocialButton>
					)}
					{account.contact.socialNetworks?.linkedInURL && (
						<SocialButton backgroundColor="#4A9CE7">
							<FiLinkedin size={24} />
						</SocialButton>
					)}
				</SideScroll>
			)}
			<h4 className="sub-session">Local</h4>
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
