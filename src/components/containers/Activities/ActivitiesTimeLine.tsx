import React, { ReactElement } from "react";
import { FiCheck, FiRotateCcw, FiX } from "react-icons/fi";
import { getColor } from "../../../utils";

import { Activity } from "../../fragments/Activities/Activity";
import { ActivityIcon } from "../../fragments/Activities/ActivityIcon";
import { ListItem } from "../../fragments/ListItem";
import { TimeLineWrapper } from "./styles";

interface IActivitiesTimeLineProps {
	items: {
		title: string;
		subtitle: string;
		time: string;
		type: "call" | "appointment" | "mail";
		status: "delay" | "pending" | "done";
	}[];
}

const renderParent = (
	status: "delay" | "pending" | "done",
	children: ReactElement[]
) => {
	switch (status) {
		case "delay":
			return (
				<Activity icon={<FiX />} title="Atividades em atraso" color="danger">
					{children}
				</Activity>
			);

		case "pending":
			return (
				<Activity
					icon={<FiRotateCcw />}
					title="Atividades pendente"
					color="warn"
				>
					{children}
				</Activity>
			);

		case "done":
			return (
				<Activity
					icon={<FiCheck />}
					title="Atividades concluídas"
					color="success"
				>
					{children}
				</Activity>
			);
	}
};

export const ActivitiesTimeLine: React.FC<IActivitiesTimeLineProps> = ({
	items,
}) => {
	const renderActivity = (status: "delay" | "pending" | "done") => {
		const matchedItems = items.filter((item) => item.status === status);
		const statusColor = getColor(status);

		if (matchedItems.length === 0) {
			return null;
		}

		return renderParent(
			status,
			matchedItems.map((item, index) => (
				<ListItem
					key={index}
					title={item.time}
					subtitle={item.subtitle}
					observation={item.time}
					icon={<ActivityIcon type={item.type} color={statusColor} />}
				/>
			))
		);
	};

	return (
		<TimeLineWrapper>
			{renderActivity("delay")}
			{renderActivity("pending")}
			{renderActivity("done")}
		</TimeLineWrapper>
	);
};
