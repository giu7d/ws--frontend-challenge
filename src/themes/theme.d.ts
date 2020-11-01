interface ITheme {
	name: string;
	colors: {
		text: string;
		background: string;
		foreground: string;
		primary: string;
		success: string;
		warn: string;
		danger: string;
	};
	font: {
		size: number;
		family: string;
	};
	roundness: number;
}
