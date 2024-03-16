import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSkeletonTheme } from "@/hooks/useSkeletonTheme";
import { useGetTopDonorsQuery } from "@/redux/services/api";
import Skeleton from "react-loading-skeleton";

interface ILeaderBoard {
  donorName: string;
  rank: number;
  totalDonation: number;
}

const Leaderboard = () => {
  const { isLoading, error, data } = useGetTopDonorsQuery(undefined);
  const { skeletonBaseColor, skeletonHighlightColor } = useSkeletonTheme();

  if (error) {
    return (
      <div className="min-h-[calc(100dvh-64px)] flex items-center justify-center">
        Error fetching data.
      </div>
    );
  }

  return (
    <main className="bg-light-white dark:bg-light-black py-20 min-h-[calc(100dvh-64px)]">
      <div className="section-wrapper">
        {isLoading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <Skeleton
                height={100}
                baseColor={skeletonBaseColor}
                highlightColor={skeletonHighlightColor}
                className="mb-2"
              />
            </div>
          ))
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>User Name</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>

            {data?.data?.map((item: ILeaderBoard) => (
              <TableBody key={item?.rank}>
                <TableRow>
                  <TableCell className="font-medium">{item.rank}</TableCell>
                  <TableCell className="font-medium">
                    {item.donorName}
                  </TableCell>
                  <TableCell className="font-medium">
                    ${item.totalDonation}
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
        )}
      </div>
    </main>
  );
};

export default Leaderboard;
