import styled from "styled-components";
import { SideScroll } from "../../fragments/SideScroll";

export const Wrapper = styled.section<IDefaultStyledProps>`
	grid-area: activities;
	display: flex;
	flex-direction: column;

	@media only screen and (min-width: 760px) {
		max-width: 900px;
		justify-self: center;
	}
`;

export const FilterWrapper = styled(SideScroll)<IDefaultStyledProps>`
	padding: 14px 24px;
	flex-wrap: nowrap;

	& > div {
		margin-right: 24px;
	}

	@media only screen and (min-width: 760px) {
		overflow: hidden;
		flex-wrap: wrap;

		& > div {
			margin-top: 14px;
			margin-right: 14px;
		}
	}

	@media only screen and (min-width: 1080px) {
		width: 100%;
		flex-wrap: wrap;
		align-self: flex-end;
	}
`;

export const TimeLineWrapper = styled.section<IDefaultStyledProps>`
	display: flex;
	flex-direction: column;
	margin: 14px 24px;
`;
