import React from "react";
import Chart from "../components/chart";
import BarChart from "../components/barChart"
const Dash = () => {
  const stats = [
    { title: "Total Students", val: "125" },
    { title: "Pending Reports", val: "15" },
    { title: "Total Reports", val: "16" },
  ];

  return (
    <div className="flex flex-col pt-20 px-20   font-['Inter'] space-y-6">
      <div>
        <p className="text-3xl my-4 font-bold text-[#035CBA]">Dashboard</p>
        <p className="text-gray-600 text-sm">
          View and manage all your students and contribute to their wellbeing!
        </p>
      </div>

      <div className="flex flex-wrap gap-6">
        {stats.map((x, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-6 border border-gray-200 shadow-md rounded-xl w-[240px] bg-white hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-blue-800 border-4 border-blue-200 flex items-center justify-center text-white font-semibold">
              
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-sm text-gray-600 font-semibold  capitalize">{x.title}</p>
              <p className="text-2xl font-light text-gray-800">{x.val}</p>
            </div>
          </div>
        ))}
      </div>
      <Chart/>
      <BarChart/>
    </div>
  );
};

export default Dash;
