import styled from "styled-components";

interface ISocialButtonProps {
	theme: ITheme;
	backgroundColor?: string;
}

export const SocialButton = styled.button<ISocialButtonProps>`
	padding: 14px;
	aspect-ratio: 1 / 1;
	border-radius: ${({ theme }) => theme.roundness * 2}px;
	color: #ffffff;
	background-color: ${({ backgroundColor = "#333" }) => backgroundColor};
`;
