import React, { useCallback } from "react";
import { TabButtonWrapper } from "./styles";

type ITabTitleProps = {
	title: string;
	index: number;
	isSelected: boolean;
	onSelect: (index: number) => void;
};

const TabTitle: React.FC<ITabTitleProps> = ({
	title,
	isSelected,
	index,
	onSelect,
}) => {
	const onClick = useCallback(() => {
		onSelect(index);
	}, [onSelect, index]);

	return (
		<TabButtonWrapper isSelected={isSelected} onClick={onClick}>
			{title}
		</TabButtonWrapper>
	);
};

export default TabTitle;
