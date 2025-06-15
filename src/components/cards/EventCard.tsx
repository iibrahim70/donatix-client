import { IEvent } from "@/types";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import BlurredImage from "../BlurredImage";
import { Avatar } from "antd";

const EventCard = ({ data }: { data: IEvent }) => {
  return (
    <Link href={`/blog-details/${data?._id}`} className="group">
      <Card className="transition-all group-hover:shadow-2xl dark:group-hover:shadow-slate-700/50 pt-0">
        <div className="relative">
          <BlurredImage
            src={data?.bannerImage}
            alt={data?.title}
            className="rounded-t-xl h-48 object-cover w-full"
          />

          <div className="absolute top-0 right-0 bg-teal-600 text-white/85 p-2.5 rounded-bl-xl rounded-tr-xl">
            <p className="text-sm font-bold">{data?.date}</p>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="line-clamp-1">{data?.title}</CardTitle>
          <CardDescription className="line-clamp-3">
            {data?.description}
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex flex-col items-start gap-2.5 text-sm text-muted-foreground border-t">
          <div className="flex items-center gap-2.5">
            <Calendar size={15} />
            <span>{data?.date}</span>
          </div>

          <div className="flex items-center gap-2.5">
            <MapPin size={15} />
            <span>{data?.location || "Online"}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default EventCard;
