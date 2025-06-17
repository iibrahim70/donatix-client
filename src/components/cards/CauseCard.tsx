import Link from "next/link";
import { ICause } from "@/types";
import BlurredImage from "../shared/BlurredImage";
import { Clock } from "lucide-react";
import { formatEndDate } from "@/helpers/formateDate";
import { cn } from "@/lib/utils";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Progress,
} from "../ui";

export const CauseCard = ({ data }: { data: ICause }) => {
  const raisedAmount = data?.received_amount || 0;
  const targetAmount = data?.target_amount || 1;
  const progressPercentage = (raisedAmount / targetAmount) * 100;
  const { text: endDate, status } = formatEndDate(data?.end_date);

  return (
    <Link href={`/causes/${data?.slug}`} className="group">
      <Card className="transition-all group-hover:shadow-xl group-hover:shadow-slate-700/50 pt-0">
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
          <CardTitle className="line-clamp-1">{data?.title}</CardTitle>
          <CardDescription className="line-clamp-3">
            {data?.short_description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-3.5">
          <Progress value={progressPercentage} />

          <div className="flex justify-between gap-5 text-xs font-semibold text-muted-foreground">
            <span>Raised: ${raisedAmount?.toLocaleString()}</span>
            <span>Goal: ${targetAmount?.toLocaleString()}</span>
          </div>

          <div
            className={cn(
              "flex items-center gap-2.5 text-sm",
              status === "urgent" ? "text-rose-600" : "text-muted-foreground"
            )}
          >
            <Clock className="size-4" />
            <p className="text-sm">{endDate}</p>
          </div>
        </CardContent>

        <CardFooter>
          <Button className="w-full" variant="outline">
            Learn More
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};
