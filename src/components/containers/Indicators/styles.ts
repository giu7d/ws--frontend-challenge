import styled from "styled-components";

export const Wrapper = styled.section<IDefaultStyledProps>`
	grid-area: indicators;
	display: flex;
	flex-direction: column;
	margin: 24px 14px;

	@media only screen and (min-width: 760px) {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
		justify-self: center;
		max-width: 900px;

		& > div {
			margin: 14px;
			min-width: 340px;
			max-width: 400px;
		}
	}

	@media only screen and (min-width: 1080px) {
		max-width: 90%;
	}
`;
