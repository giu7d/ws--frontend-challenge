import React, { useMemo } from "react";
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
} from "recharts";
import { useTheme } from "styled-components";

import { Card } from "../../Card";

interface ISellsChartIndicator {
	data: {
		sells: number;
		date: string;
	}[];
}

export const SellsChartIndicator: React.FC<ISellsChartIndicator> = ({
	data,
}) => {
	const theme = useTheme() as ITheme;
	const memorizedData = useMemo(() => [...data], [data]);

	const handleTickFormat = (data: string) => {
		const date = new Date(data);
		return `${date.getDay()}/${date.getMonth()}`;
	};

	return (
		<Card title="Vendas">
			<ResponsiveContainer width="99%" aspect={1.5}>
				<AreaChart data={memorizedData}>
					<defs>
						<linearGradient id="sells-area" x1="0" y1="0" x2="0" y2="1">
							<stop
								offset="5%"
								stopColor={theme.colors.primary}
								stopOpacity={0.8}
							/>
							<stop
								offset="95%"
								stopColor={theme.colors.primary}
								stopOpacity={0}
							/>
						</linearGradient>
					</defs>{" "}
					<XAxis dataKey="date" tickFormatter={handleTickFormat} />
					<CartesianGrid horizontal={false} strokeDasharray="2 5" />
					<Tooltip />
					<Area
						type="monotone"
						dataKey="sells"
						stroke={theme.colors.primary}
						fillOpacity={1}
						fill="url(#sells-area)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</Card>
	);
};
