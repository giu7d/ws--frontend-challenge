export interface GenericIndicator {
	id: string;
	type: "credit-limit" | "finance-title" | "sells" | "opportunities";
	extra?: number;
	items: Array<
		| {
				id: string;
				description: string;
				value: number | string;
				quantity?: string;
				color?:
					| "text"
					| "background"
					| "foreground"
					| "primary"
					| "success"
					| "warn"
					| "danger";
		  }
		| {
				id: string;
				sells: number;
				date: string;
		  }
	>;
}
