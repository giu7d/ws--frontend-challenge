import styled from "styled-components";

export const ItemsWrapper = styled.div<IDefaultStyledProps>`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	max-width: 375px;
`;

export const ActionsWrapper = styled.div<IDefaultStyledProps>`
	margin-top: 24px;
	display: flex;
	flex: 1 1;
`;
