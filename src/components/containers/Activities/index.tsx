import React from "react";

import { ActivitiesTimeLine } from "./ActivitiesTimeLine";
import { ActivitiesFilters } from "./ActivitiesFilters";

const activities = {
	filters: [
		{
			value: 25,
			title: "Total",
			color: "primary",
		},
		{
			value: 1,
			title: "Atraso",
			color: "danger",
		},
		{
			value: 0,
			title: "Previstas",
			color: "warn",
		},
		{
			value: 24,
			title: "Completas",
			color: "success",
		},
	] as {
		title: string;
		value: number;
		color: string;
	}[],
	items: [
		{
			title: "Agendamento de reunião",
			subtitle: "Erica Silva",
			time: "4 dias de atraso",
			type: "call",
			status: "delay",
		},
		{
			title: "Agendamento de reunião",
			subtitle: "Erica Silva",
			time: "4 dias de atraso",
			type: "appointment",
			status: "pending",
		},
		{
			title: "Agendamento de reunião",
			subtitle: "Erica Silva",
			time: "4 dias de atraso",
			type: "mail",
			status: "done",
		},
	] as {
		title: string;
		subtitle: string;
		time: string;
		type: "call" | "appointment" | "mail";
		status: "delay" | "pending" | "done";
	}[],
};

export const Activities: React.FC = () => {
	return (
		<>
			<ActivitiesFilters items={activities.filters} />
			<ActivitiesTimeLine items={activities.items} />
		</>
	);
};
