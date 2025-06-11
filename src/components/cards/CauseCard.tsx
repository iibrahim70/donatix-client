import Link from "next/link";
import { ICause } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import BlurredImage from "../BlurredImage";

const CauseCard = ({ data }: { data: ICause }) => {
  const raisedAmount = data?.received_amount || 0;
  const targetAmount = data?.target_amount || 1;
  const progressPercentage = (raisedAmount / targetAmount) * 100;

  return (
    <Link href={`/causes/${data?.slug}`} className="group">
      <Card className="transition-all group-hover:shadow-xl dark:group-hover:shadow-slate-700/50 pt-0">
        <div className="relative">
          <BlurredImage
            src={data?.images[0]}
            alt={data?.title}
            className="rounded-t-xl h-48 object-cover w-full"
          />

          <Badge variant="secondary" className="absolute right-3 top-3">
            {data?.category}
          </Badge>
        </div>

        <CardHeader>
          <CardTitle className="truncate">{data?.title}</CardTitle>

          <CardDescription>{data?.description}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-2.5">
          <Progress value={progressPercentage} />

          <div className="flex justify-between gap-5 text-xs font-semibold text-muted-foreground">
            <span>Raised: ${raisedAmount?.toLocaleString()}</span>
            <span>Goal: ${targetAmount?.toLocaleString()}</span>
          </div>
        </CardContent>

        <CardFooter>
          <Button className="w-full" variant="outline">
            View Cause
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CauseCard;
