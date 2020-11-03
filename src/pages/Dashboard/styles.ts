import styled from "styled-components";

export const Wrapper = styled.div<IDefaultStyledProps>`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.background};

	.profile-container {
		grid-area: profile-container;
		display: grid;
		margin: 24px 24px;
		padding: 24px;
		width: 900px;
		grid-template-columns: auto 1fr;
		grid-template-areas:
			"profile place"
			"information place";

		justify-self: center;

		background-color: ${({ theme }) => theme.colors.foreground};
		border-radius: ${({ theme }) => theme.roundness * 2}px;
	}

	@media only screen and (min-width: 1080px) {
		display: grid;
		grid-template-columns: 60% 30%;
		gap: 24px;
		grid-template-areas:
			"profile-container activities"
			"indicators activities";

		justify-content: center;

		.profile-container {
			width: 100%;
			margin-right: 0;
			justify-self: flex-start;
		}
	}
`;
