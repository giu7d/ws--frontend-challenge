import { rgba } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div<IDefaultStyledProps>`
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	.icon {
		margin-right: 14px;
	}

	.content {
		display: grid;
		gap: 4px;

		h4 {
			font-weight: normal;
			font-size: 2.25rem;
			color: ${({ theme }) => theme.colors.text};
		}

		h5 {
			font-weight: 600;
			font-size: 2rem;
			color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
		}

		small {
			font-weight: 600;
			font-size: 1.5rem;
			color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
		}
	}
`;
