import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

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
      position: 'top',
    },
    title: {
      display: false,
      text: 'Laporan data pemesanan',
    },
  },
};

const ChartPemesanan = ({ chartData }) => {
  return (
    <div className='bg-white border border-gray-200 rounded-lg shadow-sm max-w-2xl px-4 py-4 flex justify-center items-center'>
      {chartData ? <Line data={chartData} options={options} /> : 'Loading chart...'}
    </div>
  );
};

export default ChartPemesanan;
