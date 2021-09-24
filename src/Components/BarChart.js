import React from "react";
import { Bar, Line } from "react-chartjs-2";

export default function BarChart({ monthcount }) {
  return (
    <div>
      <Bar
        data={{
          labels: [
            "Jan",
            "Feb",
            "March",
            "April",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],

          datasets: [
            {
              fill: {
                target: "origin",
                above: "#abba25", // Area will be red above the origin
                below: "#03a1fc", // And blue below the origin
              },
              label: "# of Votes",
              data: monthcount,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
              minBarLength: 2,
            },
          ],
        }}
        height="300"
        options={{
          plugins: {
            title: {
              display: true,
              text: "Posts Per Month",
              align: "start",
            },
            subtitle: {
              display: false,
              text: "Custom Chart Subtitle",
              align: "center",
              padding: "10px",
            },

            legend: {
              display: false,
              labels: {
                // This more specific font property overrides the global property
                font: {
                  size: 8,
                },
              },
            },
          },
          maintainAspectRatio: false,
          lineTension: "0.5",
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
}
