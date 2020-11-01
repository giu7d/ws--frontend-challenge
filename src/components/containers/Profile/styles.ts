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
