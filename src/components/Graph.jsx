import React from 'react';
import gradient from 'chartjs-plugin-gradient';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  gradient
);
let delayed;
const options = {
  responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top',
  //     },
  //     title: {
  //       display: true,
  //       text: 'Daily sales rate',
  //     },
  //   },
  animation: {
    onComplete: () => {
      delayed = true;
    },
    delay: context => {
      let delay = 0;
      if (context.type === 'data' && context.mode === 'default' && !delayed) {
        delay = context.dataIndex * 300 + context.datasetIndex * 100;
      }
      return delay;
    },
  },

  scales: {
    y: {
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

function Graph() {
  function getData(canvas) {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 300, 0);
    gradient.addColorStop(0, '#20f08b');
    gradient.addColorStop(0.5, '#20f08b');
    gradient.addColorStop(1, '#07dfb1');

    return {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [10, 100, 6, 200, 60, 79, 8, 43, 83],
          fill: true,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: gradient,
          //   tension: 0.4,
        },
      ],
    };
  }

  const canvas = document.createElement('canvas');
  const data = getData(canvas);

  return <Line options={options} data={data} />;
}
export default Graph;
