import React from "react";
import { ChartAreaInteractive } from "../Components/AreaChart";
import { ChartBarDefault } from "../Components/BarChart";
import { ChartPieDonutActive } from "../Components/PieChart";

const Dashboard = () => {
  return (
    <div className="font-1 bg-[#FFBA08] p-2 m-4">
      <div className="flex w-full justify-center items-center p-4 m-4 gap-4">
        <ChartBarDefault />
        <ChartPieDonutActive />
      </div>
      <ChartAreaInteractive />
    </div>
  );
};

export default Dashboard;
