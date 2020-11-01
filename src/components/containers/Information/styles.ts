import { rgba } from "polished";
import styled from "styled-components";

export const Wrapper = styled.section<IDefaultStyledProps>`
	display: flex;
	flex-direction: column;
	margin: 24px;

	.sub-session {
		margin-top: 38px;
		margin-bottom: 24px;

		font-weight: 600;
		font-size: 2.5rem;
		color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
	}

	div {
		margin-bottom: 14px;
	}
`;
