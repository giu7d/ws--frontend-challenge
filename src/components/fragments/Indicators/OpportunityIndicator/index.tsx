import React from "react";
import { Badge } from "../../Badges/Badge";
import { BadgeWithText } from "../../Badges/BadgeWithText";
import { Button } from "../../Buttons/Button";
import { Card } from "../../Card";
import { ItemsWrapper, ActionsWrapper } from "./styles";

export const OpportunityIndicator: React.FC = () => {
	return (
		<Card
			title={
				<>
					<span>Oportunidades</span>
					<Badge>9</Badge>
				</>
			}
		>
			<ItemsWrapper>
				<BadgeWithText badgeValue="25" title="Ganhas" value="R$ 1.000,00" />
				<BadgeWithText
					badgeValue="15"
					badgeColor="danger"
					title="Perdidas"
					value="R$ 4.300,00"
				/>
				<BadgeWithText
					badgeValue="5"
					badgeColor="warn"
					title="Abertas"
					value="Diversas moedas"
				/>
			</ItemsWrapper>
			<ActionsWrapper>
				<Button>Ver mais</Button>
			</ActionsWrapper>
		</Card>
	);
};
