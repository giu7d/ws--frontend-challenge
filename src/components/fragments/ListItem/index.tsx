import React, { ReactElement } from "react";

import { Wrapper } from "./styles";

interface IListItemProps {
	icon?: ReactElement;
	title: string;
	subtitle?: string;
	observation?: string;
}

export const ListItem: React.FC<IListItemProps> = ({
	title,
	observation = null,
	subtitle = null,
	icon = null,
}) => {
	return (
		<Wrapper>
			{icon && <div className="icon">{icon}</div>}
			<div className="content">
				<h4>{title}</h4>
				{subtitle && <h5>{subtitle}</h5>}
				{observation && <small>{observation}</small>}
			</div>
		</Wrapper>
	);
};
