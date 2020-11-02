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

interface ISellsByTime {
	sells: number;
	date: string;
}

export const SellsChartIndicator: React.FC = () => {
	const theme = useTheme() as ITheme;
	const memorizedData = useMemo<ISellsByTime[]>(
		() => [
			{
				sells: Math.floor(100 * Math.random() * 10),
				date: new Date(2020, 20, 12).toDateString(),
			},
			{
				sells: Math.floor(200 * Math.random() * 10),
				date: new Date(2020, 20, 13).toDateString(),
			},
			{
				sells: Math.floor(150 * Math.random() * 10),
				date: new Date(2020, 20, 14).toDateString(),
			},
			{
				sells: Math.floor(50 * Math.random() * 10),
				date: new Date(2020, 20, 18).toDateString(),
			},
		],
		[]
	);

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
