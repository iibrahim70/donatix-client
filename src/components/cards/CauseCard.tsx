import Link from "next/link";
import { ICause } from "@/types";
import { BlurredImage } from "../shared";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Progress,
} from "../ui";

export const CauseCard = ({ data }: { data: ICause }) => {
  const raisedAmount = data?.received_amount || 0;
  const targetAmount = data?.target_amount || 1;
  const progressPercentage = (raisedAmount / targetAmount) * 100;

  return (
    <Link href={`/causes/${data?.slug}`} className="group">
      <Card className="shadow-md group-hover:shadow-lg group-hover:shadow-slate-700/50 transition-all duration-300 pt-0">
        <CardHeader className="relative px-0">
          <BlurredImage
            src={data?.images[0]}
            alt={data?.title}
            className="rounded-t-md h-48 object-cover w-full"
          />

          <Badge variant="secondary" className="absolute right-3.5 bottom-5">
            {data?.category}
          </Badge>
        </CardHeader>

        <CardContent className="space-y-2">
          <h6 className="text-base truncate">{data?.title}</h6>
          <p className="line-clamp-3">{data?.short_description}</p>

          <div className="pt-2.5 space-y-1.5">
            <Progress value={progressPercentage} />
            <div className="flex justify-between gap-5 text-xs font-semibold text-muted-foreground">
              <span>Raised: ${raisedAmount?.toLocaleString()}</span>
              <span>Goal: ${targetAmount?.toLocaleString()}</span>
            </div>
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
