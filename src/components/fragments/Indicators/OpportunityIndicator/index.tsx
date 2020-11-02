import React from "react";
import { Badge } from "../../Badges/Badge";
import { BadgeWithText } from "../../Badges/BadgeWithText";
import { Button } from "../../Buttons/Button";
import { Card } from "../../Card";
import { ItemsWrapper, ActionsWrapper } from "./styles";

interface IOpportunityIndicatorProps {
	quantity?: number;
	data: {
		id: string;
		description: string;
		value: number | string;
		quantity: number;
		color?: string;
	}[];
}

export const OpportunityIndicator: React.FC<IOpportunityIndicatorProps> = ({
	quantity,
	data,
}) => {
	return (
		<Card
			title={
				<>
					<span>Oportunidades</span>
					{quantity && <Badge>{quantity}</Badge>}
				</>
			}
		>
			<ItemsWrapper>
				{data.map((item) => (
					<BadgeWithText
						key={item.id}
						badgeValue={item.quantity.toString()}
						title={item.description}
						value={item.value.toLocaleString("pt-BR", {
							style: "currency",
							currency: "BRL",
						})}
						badgeColor={
							item.color as
								| "text"
								| "background"
								| "foreground"
								| "primary"
								| "success"
								| "warn"
								| "danger"
						}
					/>
				))}
			</ItemsWrapper>
			<ActionsWrapper>
				<Button>Ver mais</Button>
			</ActionsWrapper>
		</Card>
	);
};
