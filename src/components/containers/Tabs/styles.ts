import styled from "styled-components";

export const Wrapper = styled.div<IDefaultStyledProps>`
	display: flex;
	flex-direction: column;
	flex: 1;

	nav {
		display: flex;
		margin: 24px 0;
		flex-direction: row;
		max-width: 100%;
		overflow-x: auto;
		align-items: flex-end;

		::-webkit-scrollbar {
			display: none;
		}

		button {
			margin-left: 24px;
		}
	}

	@media only screen and (min-width: 760px) {
	}
`;
