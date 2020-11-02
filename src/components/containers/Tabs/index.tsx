import { AnimatePresence, motion } from "framer-motion";
import React, { ReactElement, useEffect, useState } from "react";

import TabTitle from "../../fragments/TabTitle";
import { Wrapper } from "./styles";

interface ITabsProps {
	children: ReactElement[];
}

export const Tabs: React.FC<ITabsProps> = ({ children }) => {
	const [selectedTab, setSelectedTab] = useState(0);
	const [isChangingTabs, setIsChangingTabs] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsChangingTabs(false);
		}, 200);
	}, [selectedTab]);

	const handleSelect = (index: number) => {
		setIsChangingTabs(true);
		setSelectedTab(index);
	};

	return (
		<AnimatePresence exitBeforeEnter>
			<Wrapper>
				<nav>
					{children.map((item, index) => (
						<TabTitle
							key={index}
							title={item.props.title}
							index={index}
							isSelected={index === selectedTab}
							onSelect={handleSelect}
						/>
					))}
				</nav>
				{!isChangingTabs && (
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 100 }}
					>
						{children[selectedTab]}
					</motion.div>
				)}
			</Wrapper>
		</AnimatePresence>
	);
};
