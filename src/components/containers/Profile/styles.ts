import styled from "styled-components";

export const Wrapper = styled.div<IDefaultStyledProps>`
	grid-area: profile;
	display: block;
	margin: 14px;

	.cover {
		height: 120px;
		width: 100%;
		background-color: ${({ theme }) => theme.colors.foreground};
		border-radius: ${({ theme }) => theme.roundness * 2}px
			${({ theme }) => theme.roundness * 2}px 0 0;
	}

	.content {
		margin-top: -64px;
	}

	.profile-shimmer {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media only screen and (min-width: 760px) {
		.cover {
			display: none;
		}
		.content {
			margin-top: 0;
		}
	}
`;
