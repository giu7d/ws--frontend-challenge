import React, { ReactElement, useState } from "react";

import TabTitle from "../../fragments/TabTitle";
import { Wrapper } from "./styles";

interface ITabsProps {
	children: ReactElement[];
}

export const Tabs: React.FC<ITabsProps> = ({ children }) => {
	const [selectedTab, setSelectedTab] = useState(0);

	return (
		<Wrapper>
			<nav>
				{children.map((item, index) => (
					<TabTitle
						key={index}
						title={item.props.title}
						index={index}
						isSelected={index === selectedTab}
						onSelect={setSelectedTab}
					/>
				))}
			</nav>
			{children[selectedTab]}
		</Wrapper>
	);
};
