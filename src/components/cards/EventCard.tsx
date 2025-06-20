import { IEvent } from "@/types";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { BlurredImage } from "../shared";
import { Badge, Card, CardContent, CardFooter, CardHeader } from "../ui";

export const EventCard = ({ data }: { data: IEvent }) => {
  return (
    <Link href={`/events/${data?._id}`} className="group">
      <Card className="shadow-xl group-hover:shadow-2xl group-hover:shadow-slate-700/50 transition-all duration-500 pt-0">
        <CardHeader className="relative px-0">
          <BlurredImage
            src={data?.bannerImage}
            alt={data?.title}
            className="rounded-t-xl h-48 object-cover w-full"
          />

          <Badge className="absolute top-0 right-0 p-1.5 bg-emerald-600 text-white/95 rounded-none rounded-bl-xl rounded-tr-xl">
            {data?.date}
          </Badge>
        </CardHeader>

        <CardContent className="space-y-1.5">
          <h6 className="text-base truncate">{data?.title}</h6>
          <p className="line-clamp-3">{data?.description}</p>
        </CardContent>

        <CardFooter className="flex flex-col items-start gap-2.5 text-sm text-muted-foreground border-t">
          <div className="flex items-center gap-2.5">
            <Calendar className="size-4" />
            <p>{data?.date}</p>
          </div>

          <div className="flex items-center gap-2.5">
            <MapPin className="size-4" />
            <p>{data?.location || "Online"}</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
