import { IBlog } from "@/types";
import { formateStartDate } from "@/helpers/formateDate";
import Link from "next/link";
import {
  Avatar,
  Badge,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../ui";
import { BlurredImage } from "../shared";

export const BlogCard = ({ data }: { data: IBlog }) => {
  return (
    <Link href={`/blogs/${data?.slug}`} className="group">
      <Card className="shadow-md group-hover:shadow-lg group-hover:shadow-slate-700/50 transition-all duration-300 pt-0">
        <CardHeader className="px-0">
          <BlurredImage
            src={data?.image}
            alt={data?.title}
            className="rounded-t-md h-48 object-cover w-full"
          />
        </CardHeader>

        <CardContent className="space-y-1.5">
          <h6 className="text-base truncate">{data?.title}</h6>
          <p className="line-clamp-3">{data?.short_description}</p>

          <div className="pt-1.5 flex gap-2.5 line-clamp-1">
            {data?.tags?.map((item, index) => (
              <Badge key={index} variant="secondary">
                {item}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between gap-5 border-t">
          <div className="flex items-center gap-2.5">
            <Avatar>
              <BlurredImage
                src={data?.auth_id?.avatar}
                alt={data?.auth_id?.fullName}
              />
            </Avatar>
            <p className="text-sm font-medium">{data?.auth_id?.fullName}</p>
          </div>

          <p className="text-sm text-muted-foreground">
            {formateStartDate(data?.published_at)}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};
