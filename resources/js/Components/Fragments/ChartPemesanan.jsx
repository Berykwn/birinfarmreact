import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register necessary plugins
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "bottom",
        },
        title: {
            display: false,
        },
    },
    maintainAspectRatio: false,
    scales: {
        x: {
            display: true,
        },
        y: {
            display: true,
            min:0,
            max:10
        },
    },
    animation: {
        duration: 1000,
    },
};

const ChartPemesanan = ({ chartData }) => {
    // Dapatkan data dari properti chartData
    const labels = chartData.labels || [];
    const datasets = chartData.datasets || [];

    const data = {
        labels: labels,
        datasets: datasets,
    };

    return (
        <div className="bg-white shadow-soft-xl rounded-2xl bg-clip-border px-4 py-4 flex justify-center items-center">
            {chartData ? (
                <Line data={data} options={options} height={"400px"} />
            ) : (
                "Loading chart..."
            )}
        </div>
    );
};

export default ChartPemesanan;
