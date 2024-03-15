import { ChartData } from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";
import "chart.js/auto";

const Dashboard = () => {
  const [pieChartData, setPieChartData] = useState<ChartData<"pie"> | null>(
    null
  );

  const [barChartData, setBarChartData] = useState<ChartData<"bar"> | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const year = { year: 2024 };

        const response = await axios.post(
          "https://givers-heaven-server.vercel.app/api/v1/donations/yearly-total",
          year
        );
        const resdata = response?.data?.data;

        if (resdata) {
          // Mapping data to format expected by Chart.js
          const chartLabels = resdata.map(
            (item: { month: string }) => item.month
          );
          const chartDataPoints = resdata.map(
            (item: { totalAmount: number }) => item.totalAmount
          );

          // Define reusable colors
          const backgroundColors = [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ];

          const borderColors = [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ];

          const pieData: ChartData<"pie"> = {
            labels: chartLabels,
            datasets: [
              {
                data: chartDataPoints,
                backgroundColor: backgroundColors,
                borderColor: borderColors,
                borderWidth: 1,
              },
            ],
          };

          const barData: ChartData<"bar"> = {
            labels: chartLabels,
            datasets: [
              {
                label: "Total Amount",
                data: chartDataPoints,
                backgroundColor: backgroundColors,
                borderColor: borderColors,
                borderWidth: 1,
              },
            ],
          };

          setPieChartData(pieData);
          setBarChartData(barData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="px-5 py-20 space-y-10">
      <h3>Donation Totals for 2024</h3>

      <div className="space-y-10">
        {pieChartData && <Pie className="max-h-[350px]" data={pieChartData} />}
        {barChartData && <Bar data={barChartData} />}
      </div>
    </main>
  );
};

export default Dashboard;
