import data from "@/assets/data/causes.json";
import { ICause } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CauseCard from "@/components/cards/CauseCard";
import DonationCard from "@/components/cards/DonationCard";
import MediaGallery from "@/components/MediaGallery";
import { Badge } from "@/components/ui/badge";

const CauseDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params)?.slug;
  const cause = data?.find((item) => item?.slug === slug);

  const formattedImages =
    cause?.images?.map((imageUrl) => ({
      type: "image" as const,
      url: imageUrl,
      thumbnail: imageUrl,
      alt: cause?.title,
    })) ?? [];

  const formattedVideos =
    cause?.videos?.map((videoUrl) => ({
      type: "video" as const,
      url: videoUrl,
      thumbnail: `https://images.pexels.com/photos/275977/pexels-photo-275977.jpeg?auto=compress&cs=tinysrgb&w=400`,
      alt: cause?.title,
    })) ?? [];

  const mediaItems = [...formattedImages, ...formattedVideos];

  const relatedCauses = data?.filter(
    (item) => item?.category === cause?.category && item?.slug !== slug
  );

  // --- Handle case where cause is not found ---
  if (!cause) {
    return (
      <main className="flex items-center justify-center min-h-[calc(100dvh-64px)]">
        <p>Cause not found.</p>
      </main>
    );
  }

  return (
    <main className="dark:bg-midnight-slate py-10">
      <div className="section-wrapper space-y-10">
        <div className="lg:grid lg:grid-cols-3 lg:gap-5">
          <div className="lg:col-span-2 space-y-10">
            <MediaGallery items={mediaItems} key={mediaItems?.url as string} />

            {/* Title and organizer */}
            <div className="space-y-3.5">
              <h3>{cause?.title}</h3>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <p className="text-[15px]">
                  Organized by{" "}
                  <span className="font-semibold text-foreground">
                    Givers Heaven Foundation
                  </span>
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3.5">
              <h5>About the Cause</h5>
              <p className="text-justify text-muted-foreground">
                {cause?.description}
              </p>
            </div>

            {/* Summary */}
            <div className="space-y-3.5">
              <h5>Cause Summary</h5>
              <p className="text-justify text-muted-foreground">
                {cause?.short_description}
              </p>
            </div>

            {/* Tags */}
            <div className="space-y-3.5">
              <h5>Tags</h5>
              <div className="flex flex-wrap items-center gap-2.5">
                {cause?.tags?.map((item, index) => (
                  <Badge key={index} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="lg:sticky top-[56px]">
              <DonationCard data={cause as ICause} />
            </div>
          </div>
        </div>

        {relatedCauses?.length >= 1 && (
          <Carousel>
            <CarouselContent className="-ml-1">
              {relatedCauses?.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 "
                >
                  <CauseCard key={item?._id} data={item as ICause} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </main>
  );
};

export default CauseDetails;
