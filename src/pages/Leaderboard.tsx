import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetTopDonorsQuery } from "@/redux/services/api";

interface ILeaderBoard {
  donorName: string;
  rank: number;
  totalDonation: number;
}

const Leaderboard = () => {
  const { isLoading, error, data } = useGetTopDonorsQuery(undefined);
  console.log(data);

  return (
    <main className="bg-light-white dark:bg-light-black py-20 min-h-[calc(100dvh-64px)]">
      <div className="section-wrapper">
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
                <TableCell className="font-medium">{item.donorName}</TableCell>
                <TableCell className="font-medium">
                  ${item.totalDonation}
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </div>
    </main>
  );
};

export default Leaderboard;
