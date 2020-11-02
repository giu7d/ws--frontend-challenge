import styled from "styled-components";
import { SideScroll } from "../../fragments/SideScroll";

export const FilterWrapper = styled(SideScroll)<IDefaultStyledProps>`
	padding: 14px 24px;

	div {
		margin-right: 24px;
	}
`;

export const TimeLineWrapper = styled.section<IDefaultStyledProps>`
	display: flex;
	flex-direction: column;
	margin: 14px 24px;
`;
