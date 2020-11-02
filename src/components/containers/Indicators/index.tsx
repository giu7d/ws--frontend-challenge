import React from "react";
import { v4 as uuid } from "uuid";

import { CreditLimitIndicator } from "../../fragments/Indicators/CreditLimitIndicator";
import { FinanceTitleIndicator } from "../../fragments/Indicators/FinanceTitleIndicator";
import { OpportunityIndicator } from "../../fragments/Indicators/OpportunityIndicator";
import { SellsChartIndicator } from "../../fragments/Indicators/SellsChartIndicator";
import { Wrapper } from "./styles";

const indicators = [
	{
		id: uuid(),
		type: "credit-limit",
		items: [
			{
				id: uuid(),
				description: "concedido",
				value: 12000.0,
			},
			{
				id: uuid(),
				description: "disponível",
				value: 3105.0,
				color: "success",
			},
		],
	},
	{
		id: uuid(),
		type: "finance-title",
		items: [
			{
				id: uuid(),
				description: "Vencidos",
				value: 3105.0,
				quantity: 4,
				color: "danger",
			},
			{
				id: uuid(),
				description: "A vencer",
				value: 3105.0,
				quantity: 1,
				color: "warn",
			},
			{
				id: uuid(),
				description: "Pagos",
				value: 3105.0,
				quantity: 3,
				color: "success",
			},
		],
	},
	{
		id: uuid(),
		type: "sells",
		items: [
			{
				id: uuid(),
				sells: Math.floor(100 * Math.random() * 10),
				date: new Date(2020, 20, 12).toDateString(),
			},
			{
				id: uuid(),
				sells: Math.floor(200 * Math.random() * 10),
				date: new Date(2020, 20, 13).toDateString(),
			},
			{
				id: uuid(),
				sells: Math.floor(150 * Math.random() * 10),
				date: new Date(2020, 20, 14).toDateString(),
			},
			{
				id: uuid(),
				sells: Math.floor(50 * Math.random() * 10),
				date: new Date(2020, 20, 18).toDateString(),
			},
		],
	},
	{
		id: uuid(),
		type: "opportunities",
		extra: 8,
		items: [
			{
				id: uuid(),
				description: "Ganhas",
				value: 20000.0,
				quantity: 4,
				color: "success",
			},
			{
				id: uuid(),
				description: "Perdida",
				value: 4300.0,
				quantity: 1,
				color: "danger",
			},
			{
				id: uuid(),
				description: "Abertas",
				value: "Diversas moedas",
				quantity: 1,
				color: "warn",
			},
			{
				id: uuid(),
				description: "Descartadas",
				value: "-",
				quantity: 0,
				color: "text",
			},
		],
	},
];

export const Indicators: React.FC = () => {
	const renderIndicator = (
		id: string,
		type: string,
		data: any[],
		extra?: number
	) => {
		if (data.length === 0) {
			return null;
		}

		if (type === "credit-limit") {
			return <CreditLimitIndicator key={id} data={data} />;
		}

		if (type === "finance-title") {
			return <FinanceTitleIndicator key={id} data={data} />;
		}

		if (type === "sells") {
			return <SellsChartIndicator key={id} data={data} />;
		}

		if (type === "opportunities") {
			return <OpportunityIndicator key={id} quantity={extra} data={data} />;
		}

		return null;
	};

	return (
		<Wrapper>
			{indicators.map(({ id, type, items, extra }) =>
				renderIndicator(id, type, items, extra)
			)}
		</Wrapper>
	);
};
