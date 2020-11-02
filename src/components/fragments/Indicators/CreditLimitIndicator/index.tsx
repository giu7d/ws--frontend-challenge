import React from "react";

import { Card } from "../../Card";
import { ItemsWrapper, Item } from "./styles";

export const CreditLimitIndicator: React.FC = () => {
	return (
		<Card title="Títulos Financeiros">
			<ItemsWrapper>
				<Item color="primary">
					<h4>R$ 12.000,20</h4>
					<small>Concedido</small>
				</Item>
				<Item color="success">
					<h4>R$ 3.105,00</h4>
					<small>Disponível</small>
				</Item>
			</ItemsWrapper>
		</Card>
	);
};
