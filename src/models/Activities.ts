export interface Activities {
	filters: {
		id: string;
		value: number;
		title: string;
		color?:
			| "text"
			| "background"
			| "foreground"
			| "primary"
			| "success"
			| "warn"
			| "danger";
	}[];
	items: {
		id: string;
		title: string;
		subtitle: string;
		time: string;
		type: "call" | "mail" | "appointment";
		status: "delay" | "pending" | "done";
	}[];
}
