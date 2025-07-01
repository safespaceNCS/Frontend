import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// Example data — replace these with dynamic values if needed
const flaggedCount = 10;
const notFlaggedCount = 42;

const data = {
  labels: ["Flagged", "Not Flagged"],
  datasets: [
    {
      label: "User Status",
      data: [flaggedCount, notFlaggedCount],
      backgroundColor: ["#035CBA", "#F7D65C"], // red & green
      borderRadius: 5,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 5,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const FlaggedBarChart = () => {
  return (
    <div className="w-full h-[40vh] bg-white p-4 shadow rounded-lg">
      <h2 className="text-lg font-semibold text-[#035CBA] mb-4">Flagged vs Not Flagged</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default FlaggedBarChart;
