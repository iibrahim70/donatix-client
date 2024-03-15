import { Bar, Pie } from "react-chartjs-2";
import { useEffect } from "react";
import { useGetDonationTransactionByYearMutation } from "@/redux/api/api";
import "chart.js/auto";
import { backgroundColors, borderColors } from "@/styles";
import Skeleton from "react-loading-skeleton";

const Dashboard = () => {
  const [getData, { isLoading, error, data }] =
    useGetDonationTransactionByYearMutation();

  // Mapping data to format expected by Chart.js
  const chartLabels = data?.data?.map((item: { month: string }) => item.month);
  const chartDataPoints = data?.data?.map(
    (item: { totalAmount: number }) => item.totalAmount
  );

  // Pie chart data
  const pieChartData = {
    labels: chartLabels,
    datasets: [
      {
        data: chartDataPoints,
        backgroundColor: backgroundColors, // Using predefined colors
        borderColor: borderColors, // Using predefined colors
        borderWidth: 1,
      },
    ],
  };

  // Bar chart data
  const barChartData = {
    labels: chartLabels,
    datasets: [
      {
        label: "Total Amount",
        data: chartDataPoints,
        backgroundColor: backgroundColors, // Using predefined colors
        borderColor: borderColors, // Using predefined colors
        borderWidth: 1,
      },
    ],
  };

  // Fetch data on component mount
  useEffect(() => {
    const year = 2024;
    getData(year);
  }, [getData]);

  if (isLoading) {
    return (
      <div className="py-20 px-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton
            key={index}
            height={100}
            baseColor="#02011B"
            highlightColor="#384259"
            className="mb-2"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return <div>Error fetching data.</div>;
  }

  return (
    <main className="px-5 py-20 space-y-10">
      <h3>Donation Totals for 2024</h3>

      <div className="space-y-10">
        {/* Render Pie chart */}
        <Pie data={pieChartData} className="max-h-[350px]" />

        {/* Render Bar chart */}
        <Bar data={barChartData} />
      </div>
    </main>
  );
};

export default Dashboard;
