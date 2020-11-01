import { rgba } from "polished";
import styled from "styled-components";

interface ITabButtonWrapperProps {
	theme: ITheme;
	isSelected: boolean;
}

const renderSelected = (isSelected: boolean, theme: ITheme) => {
	if (isSelected) {
		return `
      font-size: 3rem;
      color: ${rgba(theme.colors.text, 0.75)};
    `;
	}

	return `
    font-size: 2rem;
    color: ${rgba(theme.colors.text, 0.25)};
  `;
};

export const TabButtonWrapper = styled.button<ITabButtonWrapperProps>`
	background-color: inherit;
	border: none;
	font-weight: 600;

	${({ isSelected, theme }) => renderSelected(isSelected, theme)}
`;
