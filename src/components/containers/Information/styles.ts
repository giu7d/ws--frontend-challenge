import styled from "styled-components";

export const Wrapper = styled.section<IDefaultStyledProps>`
	grid-area: information;
	display: flex;
	flex-direction: column;
	margin: 24px;

	div {
		margin-bottom: 14px;
	}
`;
