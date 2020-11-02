import { darken } from "polished";
import styled from "styled-components";

interface IItemProps {
	theme: ITheme;
	color?:
		| "text"
		| "background"
		| "foreground"
		| "primary"
		| "success"
		| "warn"
		| "danger";
}

export const ItemsWrapper = styled.div<IDefaultStyledProps>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	max-width: 375px;

	& > div {
		margin-bottom: 14px;
	}
`;

export const Item = styled.div<IItemProps>`
	display: flex;
	flex-direction: column;

	h4 {
		font-weight: 600;
		font-size: 2rem;
		color: ${({ theme, color = "primary" }) =>
			darken(0.1, theme.colors[color])};
	}

	small {
		margin-top: 4px;
		font-weight: normal;
		font-size: 2rem;
		color: ${({ theme }) => darken(0.1, theme.colors.text)};
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
`;
