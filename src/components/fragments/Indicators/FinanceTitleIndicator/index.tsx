import React from "react";
import { BadgeWithText } from "../../Badges/BadgeWithText";
import { Card } from "../../Card";
import { ItemsWrapper } from "./styles";

interface IFinanceTitleIndicatorProps {
	data: {
		id: string;
		value: number | string;
		quantity: number;
		description: string;
		color?: string;
	}[];
}

export const FinanceTitleIndicator: React.FC<IFinanceTitleIndicatorProps> = ({
	data,
}) => {
	return (
		<Card title="Títulos Financeiros">
			<ItemsWrapper>
				{data.map(({ id, value, quantity, description, color }) => (
					<BadgeWithText
						key={id}
						badgeValue={quantity.toString()}
						badgeColor={
							color as
								| "text"
								| "background"
								| "foreground"
								| "primary"
								| "success"
								| "warn"
								| "danger"
						}
						title={value.toLocaleString("pt-BR", {
							style: "currency",
							currency: "BRL",
						})}
						value={description}
					/>
				))}
			</ItemsWrapper>
		</Card>
	);
};
