import { ITestimonial } from "@/types";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui";
import BlurredImage from "../shared/BlurredImage";

export const TestimonialCard = ({ data }: { data: ITestimonial[] }) => {
  return (
    <>
      {data?.slice(0, 6)?.map((item) => (
        <Card
          key={item?._id}
          className="flex flex-col gap-3.5 items-center text-center transform transition-transform cursor-pointer duration-500 shadow-xl hover:scale-105 hover:shadow-2xl bg-transparent"
        >
          <BlurredImage
            src={item?.auth_id?.avatar}
            alt={item?.auth_id?.fullName}
            className="size-20 rounded-full object-cover ring-2 ring-white/60"
          />

          <CardHeader className="w-full">
            <CardTitle>{item?.auth_id?.fullName}</CardTitle>
            <CardDescription>{item?.designation}</CardDescription>
          </CardHeader>

          <CardFooter>
            <q className="text-center italic text-white/60">
              {item?.testimonial}
            </q>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
