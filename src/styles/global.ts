import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<IDefaultStyledProps>`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:root {
		font-size:  ${({ theme }) => `${theme.font.size}px`};
		font-family: ${({ theme }) => theme.font.family};
		color: ${({ theme }) => theme.colors.text};
		background-color: ${({ theme }) => theme.colors.background};
	}

	html,
	body,
	#root {
		height: 100%;
	}

	input,
	textarea,
	button,
	select,
	a {
		-webkit-tap-highlight-color: rgba(0,0,0,0);
	}

	button {
		border: none;
		cursor: pointer;
		outline: none;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		transition: 300ms opacity ease-out;
		background-color: inherit;

		::-moz-focus-inner {
			border: none;
		}

		:active {
			transition: 300ms opacity ease-out;
			border-style: none;
		}

		:hover {	
			opacity: 0.75; 
			transition: 300ms opacity ease-out;
		}
		
	}
`;
