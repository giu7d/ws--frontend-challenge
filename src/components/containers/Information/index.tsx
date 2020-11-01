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
import { SocialButton } from "../../fragments/Buttons/SocialButton";

import { ListItem } from "../../fragments/ListItem";
import { SideScroll } from "../../fragments/SideScroll";
import { Wrapper } from "./styles";

export const Information: React.FC = () => {
	return (
		<Wrapper>
			<ListItem
				icon={<FiPhone opacity={0.5} size={24} />}
				title="(45) 9 9999-0000"
				subtitle="Celular"
			/>
			<ListItem
				icon={<FiMail opacity={0.5} size={24} />}
				title="you@domain.com"
				subtitle="Trabalho"
			/>
			<SideScroll>
				<SocialButton backgroundColor="#4A6DE7">
					<FiFacebook size={24} />
				</SocialButton>
				<SocialButton backgroundColor="#FF6B7D">
					<FiInstagram size={24} />
				</SocialButton>
				<SocialButton backgroundColor="#4AD4E7">
					<FiTwitter size={24} />
				</SocialButton>
				<SocialButton backgroundColor="#4A9CE7">
					<FiLinkedin size={24} />
				</SocialButton>
			</SideScroll>
			<h4 className="sub-session">Local</h4>
			<ListItem
				icon={<FiMapPin opacity={0.5} size={24} />}
				title="Avenida Brasil, 4019"
				subtitle="Cascavel - PR"
				observation="Trabalho"
			/>
		</Wrapper>
	);
};
