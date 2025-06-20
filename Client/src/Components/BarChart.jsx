"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart with a custom label";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-2)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
  label: {
    color: "var(--background)",
  },
};

export function ChartBarLabelCustom() {
  return (
    <Card className="bg-[#FAA307] text-[#03071E]">
      <CardHeader>
        <CardTitle>Bar Chart - Custom Label</CardTitle>
        <CardDescription>
          <p className="text-[#E85D04]">January - June 2024</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1">
        <ChartContainer config={chartConfig} className="flex-1">
          <BarChart data={chartData} layout="vertical" margin={{ right: 16 }}>
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="desktop" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar dataKey="desktop" layout="vertical" fill="#D00000" radius={4}>
              <LabelList
                dataKey="month"
                position="insideLeft"
                offset={8}
                className="fill-[#370617]"
                fontSize={12}
              />
              <LabelList
                dataKey="desktop"
                position="right"
                offset={8}
                className="fill-[#6A040F]"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          <p className="text-[#E85D04]">
            Showing total visitors for the last 6 months
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
