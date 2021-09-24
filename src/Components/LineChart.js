import React from "react";
import { Bar, Line } from "react-chartjs-2";

export default function LineChart({ content, customChart }) {
  const contentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontSize: "60px",
  };
  return (
    <div style={{ position: "relative" }}>
      <div className="p-text-center p-mx-auto" style={contentStyle}>
        {content?.posts?.length} {content?.pages?.length}{" "}
        {content?.authors?.length} {content?.tags?.length}
      </div>
      <Line
        data={{
          labels: [
            120, 52, 1000, 341, 520, 60, 82, 100, 200, 82, 300, 201, 900, 200,
            1000,
          ],

          datasets: [
            {
              fill: {
                target: "origin",
                above: "#e6eced", // Area will be red above the origin
                below: "", // And blue below the origin
              },

              data: [
                120, 52, 1000, 341, 520, 60, 82, 100, 200, 82, 300, 201, 900,
                200, 1000,
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              // borderColor: [
              //   "rgba(255, 99, 132, 1)",
              //   "rgba(54, 162, 235, 1)",
              //   "rgba(255, 206, 86, 1)",
              //   "rgba(75, 192, 192, 1)",
              //   "rgba(153, 102, 255, 1)",
              //   "rgba(255, 159, 64, 1)",
              // ],
              borderWidth: 1,
            },
          ],
        }}
        borderColor="blue"
        options={{
          plugins: {
            title: {
              display: true,
              text: customChart,
              align: "start",
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
              display: false,
              grid: {
                display: false,
              },
            },
            y: {
              display: false,
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
