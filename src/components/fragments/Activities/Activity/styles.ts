import { darken, rgba } from "polished";
import styled from "styled-components";

interface IWrapperProps {
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

export const Wrapper = styled.div<IWrapperProps>`
	display: flex;
	flex-direction: column;

	.activity-header {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 8px 0;

		.activity-icon {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 14px;
			width: 32px;
			height: 32px;
			border-radius: 32px;
			font-size: 2rem;
			color: ${({ theme, color = "primary" }) =>
				darken(0.2, theme.colors[color])};
			background-color: ${({ theme, color = "primary" }) =>
				rgba(theme.colors[color], 0.25)};
		}

		h4 {
			font-weight: 600;
			font-size: 2rem;
			color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
		}
	}

	.activity-content {
		margin-left: 16px;
		padding-left: 24px;

		border-left: 2px dashed rgba(0, 0, 0, 0.25);
	}
`;
