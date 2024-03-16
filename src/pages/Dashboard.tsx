import { Bar, Pie } from "react-chartjs-2";
import { useEffect } from "react";
import { useGetMonthlyTotalDonationsForYearMutation } from "@/redux/services/api";
import "chart.js/auto";
import { backgroundColors, borderColors } from "@/styles";
import Skeleton from "react-loading-skeleton";
import { useSkeletonTheme } from "@/hooks/useSkeletonTheme";

const Dashboard = () => {
  const { skeletonBaseColor, skeletonHighlightColor } = useSkeletonTheme();
  const [getData, { isLoading, error, data }] =
    useGetMonthlyTotalDonationsForYearMutation();

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

  if (error) {
    return (
      <div className="min-h-[calc(100dvh-64px)] flex items-center justify-center">
        Error fetching data.
      </div>
    );
  }

  return (
    <main className="px-5 py-20">
      {isLoading ? (
        Array.from({ length: 5 }).map((_, index) => (
          <Skeleton
            key={index}
            height={100}
            baseColor={skeletonBaseColor}
            highlightColor={skeletonHighlightColor}
            className="mb-2"
          />
        ))
      ) : (
        <div className="space-y-10">
          <h3>Total Donations for 2024</h3>

          {/* Render Pie chart */}
          <Pie data={pieChartData} className="max-h-[350px]" />

          {/* Render Bar chart */}
          <Bar data={barChartData} />
        </div>
      )}
    </main>
  );
};

export default Dashboard;
