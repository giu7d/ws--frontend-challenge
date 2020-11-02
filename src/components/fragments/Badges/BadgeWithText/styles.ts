import { rgba } from "polished";
import styled from "styled-components";

import { Badge } from "../Badge";

interface IWrapperProps {
	theme: ITheme;
	dropShadow: boolean;
}

export const BadgeWrapper = styled(Badge)<IDefaultStyledProps>`
	margin-right: 8px;
	display: flex;
	width: 38px;
	height: 38px;
	align-items: center;
	justify-content: center;
`;

export const Wrapper = styled.div<IWrapperProps>`
	padding: 8px;
	display: flex;
	flex-direction: row;
	width: fit-content;
	max-width: 50%;

	border-radius: ${({ theme }) => theme.roundness}px;
	align-items: center;
	justify-content: flex-start;

	box-shadow: ${({ theme, dropShadow }) => {
		if (dropShadow) {
			return `0 0 10px ${rgba(theme.colors.text, 0.1)}`;
		}
		return "none";
	}};

	.badge-content {
		margin: 0;
		display: flex;
		flex-direction: column;

		.badge-title {
			font-weight: 600;
			font-size: 2rem;
			color: ${({ theme }) => rgba(theme.colors.text, 0.75)};
		}

		.badge-value {
			margin-top: 4px;
			font-weight: normal;
			font-size: 2rem;
			color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
`;
