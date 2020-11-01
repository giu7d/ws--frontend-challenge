import styled from "styled-components";

export const Wrapper = styled.div<IDefaultStyledProps>`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.background};
`;
