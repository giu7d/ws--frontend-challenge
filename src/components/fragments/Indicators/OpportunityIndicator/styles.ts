import { rgba } from "polished";
import styled from "styled-components";

import { Badge } from "../../Badge";

export const BadgeWrapper = styled(Badge)`
	grid-area: badge;
	display: flex;
	width: 38px;
	height: 38px;
	align-items: center;
	justify-content: center;
`;

export const ItemsWrapper = styled.div<IDefaultStyledProps>`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	max-width: 375px;

	.item {
		padding: 8px;
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-areas: "badge title" "badge value";
		gap: 8px;
		max-width: 50%;

		.title {
			grid-area: title;
			font-weight: 600;
			font-size: 2rem;
			color: ${({ theme }) => rgba(theme.colors.text, 0.75)};
		}

		.value {
			grid-area: value;
			font-weight: normal;
			font-size: 2rem;
			color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
`;

export const ActionsWrapper = styled.div<IDefaultStyledProps>`
	margin-top: 24px;
	display: flex;
	flex: 1 1;
`;
