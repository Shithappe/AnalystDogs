<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
<!-- <template>
  <div>
    awd
  {{ labelsDiagram }}
  </div>
</template> -->

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  props: ['labelsDiagram', 'dataDiagram'],
  //   : Array,
  //   : Array
  // },
  data() {
    return {
      chartData: {
        labels: this.labelsDiagram,
        // labels: [
        //   "January",
        //   "February",
        //   "March",
        //   "April",
        //   "May",
        //   "June",
        //   "July",
        //   "August",
        //   "September",
        //   "October",
        // ],
        datasets: [
          {
            label: "",
            data: this.dataDiagram,
            // data: [40, 20, 12, 30, 50, 35, 25, 15, 28, 45],
            backgroundColor: (ctx) => {
              const canvas = ctx.chart.ctx;
              const gradient = canvas.createLinearGradient(0, 0, 0, ctx.chart.height);

              gradient.addColorStop(0, "#00BFFF");
              gradient.addColorStop(0.33, "#4B0082");
              gradient.addColorStop(0.66, "#800080");
              gradient.addColorStop(1, "#FF1493");

              return gradient;
            },
            tension: 0.25,
            borderColor: "#00bfff",
            borderWidth: 1,
            shadowColor: "rgb(255, 255, 0)",
            shadowBlur: 20,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "My Chart",
          fontColor: "rgba(255, 255, 255, 0.5)",
          fontSize: 16,
          fontStyle: "bold",
        },
        legend: {
          labels: {
            fontColor: "#333",
            fontSize: 14,
            fontStyle: "bold",
          },
          usePointStyle: false,
        },
        scales: {
          x: {
            display: false,
            // type: "category",
            // ticks: {
            //   color: "rgba(255, 255, 255, 0.5)",
            //   font: {
            //     size: 14,
            //   },
            // },
            // grid: {
            //   display: false,
            // },
          },
          y: {
            type: "linear",
            ticks: {
              color: "rgba(255, 255, 255, 0.5)",
              font: {
                size: 14,
              },
              beginAtZero: true,
            },
            grid: {
              color: "rgba(255, 255, 255, 0.5)",
              lineWidth: 1,
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
        },
        layout: {
          padding: {
            top: 20,
          },
        },
        barPercentage: 0.6,
        categoryPercentage: 0.8,
      },
    };
  },
};
</script>
