import styled from "styled-components";

interface ISocialButtonProps {
	theme: ITheme;
	backgroundColor?: string;
}

export const SocialButton = styled.button<ISocialButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 14px;
	font-size: 2rem;
	border-radius: ${({ theme }) => theme.roundness * 2}px;
	color: #ffffff;
	background-color: ${({ backgroundColor = "#333" }) => backgroundColor};
`;
