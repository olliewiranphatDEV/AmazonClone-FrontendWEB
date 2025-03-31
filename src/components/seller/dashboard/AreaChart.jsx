import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const AreaChart = () => {
    const data = {
        labels: [100, 200, 300, 400, 500, 600],
        datasets: [
            {
                label: "Dataset 1",
                data: [10, 30, 20, 40, 35, 50],
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                borderColor: "blue",
                fill: true,
            },
            {
                label: "Dataset 2",
                data: [5, 20, 15, 30, 25, 45],
                backgroundColor: "rgba(0, 255, 0, 0.5)",
                borderColor: "green",
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
        },
    };

    return <Line data={data} options={options} />;
};

export default AreaChart;
