import { rgba } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div<IDefaultStyledProps>`
	margin: 14px;

	.cover {
		height: 120px;
		background-color: ${({ theme }) => theme.colors.foreground};
		border-radius: ${({ theme }) => theme.roundness * 2}px
			${({ theme }) => theme.roundness * 2}px 0 0;
	}

	.content {
		margin-top: -64px;
	}
`;

export const ProfileInformationWrapper = styled.div<IDefaultStyledProps>`
	display: flex;
	flex-direction: column;
	align-items: center;

	.fullName {
		margin: 4px 0;
		font-size: 3rem;
		font-weight: 600;
		text-transform: capitalize;
		color: ${({ theme }) => theme.colors.text};
	}

	.companyName {
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
