import { rgba } from "polished";
import styled from "styled-components";

export const Button = styled.button<IDefaultStyledProps>`
	display: flex;
	flex: 1;
	padding: 8px 24px;
	height: 54px;
	border-radius: ${({ theme }) => theme.roundness}px;

	font-size: 2rem;

	color: ${({ theme }) => theme.colors.primary};
	background-color: ${({ theme }) => rgba(theme.colors.primary, 0.15)};

	align-items: center;
	justify-content: center;

	font-weight: 600;
	font-size: 2.5rem;
`;
