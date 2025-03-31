import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
    const data = {
        labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
        datasets: [
            {
                label: "Orders A",
                data: [50, 45, 40, 35, 30, 25],
                backgroundColor: "blue",
                barThickness: 15
            },
            {
                label: "Orders B",
                data: [40, 25, 35, 40, 25, 15],
                backgroundColor: "purple",
                barThickness: 15
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
        },
    };

    return <Bar data={data} options={options} />;
};

export default BarChart;
