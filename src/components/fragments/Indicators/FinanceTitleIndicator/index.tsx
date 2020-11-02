import React from "react";
import { BadgeWithText } from "../../Badges/BadgeWithText";
import { Card } from "../../Card";
import { ItemsWrapper } from "./styles";

export const FinanceTitleIndicator: React.FC = () => {
	return (
		<Card title="Títulos Financeiros">
			<ItemsWrapper>
				<BadgeWithText
					badgeValue="1"
					badgeColor="danger"
					title="R$ 3.105,00"
					value="Vencidos"
				/>
				<BadgeWithText
					badgeValue="2"
					badgeColor="warn"
					title="R$ 3.105,00"
					value="A vencer"
				/>
				<BadgeWithText
					badgeValue="5"
					badgeColor="success"
					title="R$ 3.105,00"
					value="Pagos"
				/>
			</ItemsWrapper>
		</Card>
	);
};
