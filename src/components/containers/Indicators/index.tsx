import React from "react";
import { useIndicators } from "../../../hooks/useIndicators";

import { CreditLimitIndicator } from "../../fragments/Indicators/CreditLimitIndicator";
import { FinanceTitleIndicator } from "../../fragments/Indicators/FinanceTitleIndicator";
import { OpportunityIndicator } from "../../fragments/Indicators/OpportunityIndicator";
import { SellsChartIndicator } from "../../fragments/Indicators/SellsChartIndicator";
import { CardShimmer } from "../../fragments/Shimmer/CardShimmer";
import { Wrapper } from "./styles";

export const Indicators: React.FC = () => {
	const { indicators, isLoading } = useIndicators();

	if (isLoading) {
		return (
			<Wrapper>
				<CardShimmer />
				<CardShimmer />
			</Wrapper>
		);
	}

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
