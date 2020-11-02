import { rgba } from "polished";
import styled from "styled-components";
import Ripples from "react-ripples";

export const Wrapper = styled(Ripples)<IDefaultStyledProps>`
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	justify-content: flex-start;
	border-radius: ${({ theme }) => theme.roundness}px;

	.icon {
		margin-right: 14px;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;

		h4 {
			font-weight: normal;
			font-size: 2.25rem;
			color: ${({ theme }) => theme.colors.text};
		}

		h5 {
			margin-top: 4px;
			font-weight: 600;
			font-size: 2rem;
			color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
		}

		small {
			margin-top: 4px;
			font-weight: 600;
			font-size: 1.5rem;
			color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
		}
	}
`;
