import { IBlog } from "@/types";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import BlurredImage from "../BlurredImage";
import { Badge } from "../ui/badge";
import { Avatar } from "../ui/avatar";
import { formateStartDate } from "@/helpers/formateDate";

const BlogCard = ({ data }: { data: IBlog }) => {
  return (
    <Link href={`/blog-details/${data?.slug}`} className="group">
      <Card className="transition-all group-hover:shadow-2xl dark:group-hover:shadow-slate-700/50 pt-0">
        <div className="relative">
          <BlurredImage
            src={data?.image}
            alt={data?.title}
            className="rounded-t-xl h-48 object-cover w-full"
          />
        </div>

        <CardHeader>
          <CardTitle className="line-clamp-1">{data?.title}</CardTitle>
          <CardDescription className="line-clamp-3">
            {data?.short_description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex gap-2.5 line-clamp-1">
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
                alt={data?.auth_id?.name}
              />
            </Avatar>
            <p className="text-sm font-medium">{data?.auth_id?.name}</p>
          </div>

          <p className="text-sm text-muted-foreground">
            {formateStartDate(data?.published_at)}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
