import { ITestimonial } from "@/types";
import { Card, CardFooter, CardHeader } from "../ui";
import { BlurredImage } from "../shared";

export const TestimonialCard = ({ data }: { data: ITestimonial }) => {
  return (
    <>
      <Card className="transform transition-transform cursor-pointer duration-500 shadow-xl hover:scale-105 hover:shadow-2xl bg-transparent">
        <CardHeader>
          <q className="text-center italic text-white/55">
            {data?.testimonial}
          </q>
        </CardHeader>

        <CardFooter className="inline-flex items-center justify-center gap-3.5">
          <BlurredImage
            src={data?.auth_id?.avatar}
            alt={data?.auth_id?.fullName}
            className="size-16 rounded-full object-cover ring-2 ring-white/60"
          />

          <div>
            <h6 className="text-base">{data?.auth_id?.fullName}</h6>
            <p>{data?.designation}</p>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};
