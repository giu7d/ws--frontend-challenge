import React from "react";

import { CreditLimitIndicator } from "../../fragments/Indicators/CreditLimitIndicator";
import { FinanceTitleIndicator } from "../../fragments/Indicators/FinanceTitleIndicator";
import { OpportunityIndicator } from "../../fragments/Indicators/OpportunityIndicator";
import { SellsChartIndicator } from "../../fragments/Indicators/SellsChartIndicator";
import { Wrapper } from "./styles";

export const Indicators: React.FC = () => {
	return (
		<Wrapper>
			<OpportunityIndicator />
			<FinanceTitleIndicator />
			<SellsChartIndicator />
			<CreditLimitIndicator />
		</Wrapper>
	);
};
