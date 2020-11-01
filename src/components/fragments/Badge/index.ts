import { darken, rgba } from "polished";
import styled from "styled-components";

interface IBadgeProps {
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

export const Badge = styled.span<IBadgeProps>`
	padding: 8px 14px;
	font-weight: 600;
	font-size: 2rem;

	color: ${({ theme, color = "primary" }) => darken(0.2, theme.colors[color])};
	background-color: ${({ theme, color = "primary" }) =>
		rgba(theme.colors[color], 0.25)};

	border-radius: ${({ theme }) => theme.roundness}px;
`;
