import React from "react";
import { Badge } from "../../Badge";
import { Button } from "../../Buttons/Button";
import { Card } from "../../Card";
import { ItemsWrapper, BadgeWrapper, ActionsWrapper } from "./styles";

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
				<div className="item">
					<BadgeWrapper>25</BadgeWrapper>
					<span className="title">Ganhas</span>
					<span className="value">R$ 1.000,00</span>
				</div>

				<div className="item">
					<BadgeWrapper color="danger">25</BadgeWrapper>
					<span className="title">Perdidas</span>
					<span className="value">R$ 1.000,00</span>
				</div>

				<div className="item">
					<BadgeWrapper color="warn">25</BadgeWrapper>
					<span className="title">Abertas</span>
					<span className="value">Diversas possibilidades</span>
				</div>
			</ItemsWrapper>
			<ActionsWrapper>
				<Button>Ver mais</Button>
			</ActionsWrapper>
		</Card>
	);
};
