import React from "react";
import {
  Line
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

// Register components with Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

// Generate dummy data for 52 weeks
const weeks = Array.from({ length: 52 }, (_, i) => `Week ${i + 1}`);
const values = Array.from({ length: 52 }, () => Math.floor(Math.random() * 100));

const data = {
  labels: weeks,
  datasets: [
    {
      label: "Weekly Reports",
      data: values,
      fill: false,
      borderColor: "#035CBA",
      backgroundColor: "#035CBA",
      tension: 0.3,
      pointRadius: 2,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const LineChart52Weeks = () => {
  return (
    <div className="w-full h-[400px] bg-white p-4 shadow rounded-lg">
      <h2 className="text-lg font-semibold text-[#035CBA] mb-4">52-Week Trend</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart52Weeks;
