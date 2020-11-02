export const getColor = (status: "delay" | "pending" | "done") => {
	switch (status) {
		case "delay":
			return "danger";

		case "pending":
			return "warn";

		case "done":
			return "success";

		default:
			return "primary";
	}
};
