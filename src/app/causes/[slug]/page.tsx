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

const CauseDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params)?.slug;
  const cause = data?.find((item: ICause) => item?.slug === slug);

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
    (item: ICause) => item?.category === cause?.category && item?.slug !== slug
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
    <main className="dark:bg-charcoal py-10">
      <div className="section-wrapper space-y-10">
        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
          <div className="lg:col-span-2">
            {/* Media Gallery */}
            <MediaGallery items={mediaItems} />

            {/* Title and Organizer Info */}
            <div className="mb-8">
              <span className="text-sm font-semibold text-deep-teal uppercase tracking-wider">
                {cause.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold my-2">
                {cause.title}
              </h1>
              <div className="flex items-center gap-3 mt-4 text-muted-foreground">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>
                  Organized by{" "}
                  <span className="font-semibold text-foreground">
                    Givers Heaven Foundation
                  </span>
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold">Our Story</h2>
              <p className="text-justify">{cause.description}</p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="lg:sticky top-[56px]">
              <DonationCard data={cause} />
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
                  <CauseCard key={item?._id} data={item} />
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
