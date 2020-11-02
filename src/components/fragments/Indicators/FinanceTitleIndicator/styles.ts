import styled from "styled-components";

export const ItemsWrapper = styled.div<IDefaultStyledProps>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	max-width: 375px;

	& > div {
		margin-bottom: 14px;
	}
`;
