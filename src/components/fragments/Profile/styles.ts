import { rgba } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div<IDefaultStyledProps>`
	display: flex;
	flex-direction: column;
	align-items: center;

	.profile-fullName {
		margin: 4px 0;
		font-size: 3rem;
		font-weight: 600;
		text-transform: capitalize;
		color: ${({ theme }) => theme.colors.text};
	}

	.profile-companyName {
		margin: 4px 0;
		font-size: 2rem;
		font-weight: normal;
		text-transform: capitalize;
		color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
	}

	span {
		margin: 4px 0;
	}
`;
