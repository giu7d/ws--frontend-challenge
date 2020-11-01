import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { Routes } from "./routes";
import { Theme } from "./themes/light";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<Routes />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
