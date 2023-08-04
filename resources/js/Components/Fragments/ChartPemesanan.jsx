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
            position: "top",
        },
        title: {
            display: false,
            text: "Laporan data pemesanan",
        },
    },
};

const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const data = {
    labels,
    datasets: [
        {
            label: "Success",
            data: [8, 2, 7, 1, 11, 6], // Array of data points
            borderColor: "rgb(0, 128, 0)", // Green border color
            backgroundColor: "rgba(0, 128, 0, 0.5)",
        },
    ],
};

const ChartPemesanan = () => {
    return <Line data={data} options={options} />;
};

export default ChartPemesanan;
