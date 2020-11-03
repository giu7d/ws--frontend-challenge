import { rgba } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div<IDefaultStyledProps>`
	display: flex;
	flex-direction: column;
	align-items: center;

	.profile-fullName {
		margin: 4px 0;
		font-size: 3rem;
		font-weight: 600;
		text-transform: capitalize;
		color: ${({ theme }) => theme.colors.text};
	}

	.profile-companyName {
		margin: 4px 0;
		font-size: 2rem;
		font-weight: normal;
		text-transform: capitalize;
		color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
	}

	.profile-badge {
		margin: 4px 0;
	}

	@media only screen and (min-width: 760px) {
		display: grid;
		grid-template-areas: "avatar name" "avatar company" "avatar badge";
		max-width: 350px;
		gap: 14px;
		align-items: center;
		justify-content: flex-start;

		.profile-avatar {
			grid-area: avatar;
			margin: 0;
		}

		.profile-fullName {
			grid-area: name;
			margin: 0;
		}

		.profile-companyName {
			grid-area: company;
			margin: 0;
		}

		.profile-badge {
			grid-area: badge;
		}
	}
`;
