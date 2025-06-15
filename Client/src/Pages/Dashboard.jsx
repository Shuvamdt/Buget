import React from "react";
import { ChartAreaInteractive } from "../Components/AreaChart";
import { ChartBarDefault } from "../Components/BarChart";

const Dashboard = () => {
  return (
    <div className="font-1 bg-[#FFBA08] p-2 m-4">
      <div className="flex w-full justify-center items-center p-4 m-4">
        <ChartBarDefault />
      </div>
      <ChartAreaInteractive />
    </div>
  );
};

export default Dashboard;
