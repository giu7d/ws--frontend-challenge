import React from "react";

import { Card } from "../../Card";
import { ItemsWrapper, Item } from "./styles";

interface ICreditLimitIndicatorProps {
	data: {
		id: string;
		description: string;
		value: number;
		color?: string;
	}[];
}

export const CreditLimitIndicator: React.FC<ICreditLimitIndicatorProps> = ({
	data,
}) => {
	return (
		<Card title="Títulos Financeiros">
			<ItemsWrapper>
				{data.map(({ id, description, value, color }) => (
					<Item
						key={id}
						color={
							color as
								| "text"
								| "background"
								| "foreground"
								| "primary"
								| "success"
								| "warn"
								| "danger"
						}
					>
						<h4>
							{value.toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL",
							})}
						</h4>
						<small>{description}</small>
					</Item>
				))}
			</ItemsWrapper>
		</Card>
	);
};
