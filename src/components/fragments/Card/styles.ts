import { rgba } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div<IDefaultStyledProps>`
	display: flex;
	flex-direction: column;
	flex: 1;
	margin-top: 24px;
	border-radius: ${({ theme }) => theme.roundness}px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

	.card-header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		margin: 14px;
		font-weight: 600;
		font-size: 2.5rem;
		color: ${({ theme }) => rgba(theme.colors.text, 0.75)};

		h4 span:last-child {
			margin-left: 8px;
		}

		.card-icon {
			color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
		}
	}

	.card-content {
		margin: 0 14px 24px 14px;
	}
`;
