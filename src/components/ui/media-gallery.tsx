"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { PlayCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { IMedia } from "@/types";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

export const MediaGallery = ({ mediaItems }: { mediaItems: IMedia[] }) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const currentMedia = mediaItems[activeMediaIndex];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkForScrollability = useCallback(() => {
    const container = scrollContainerRef?.current;

    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  }, []);

  const handleThumbScroll = (direction: "left" | "right") => {
    const container = scrollContainerRef?.current;
    if (!container) return;

    const scrollDistance = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === "left" ? -scrollDistance : scrollDistance,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollContainerRef?.current;
    if (!container) return;

    checkForScrollability();
    window.addEventListener("resize", checkForScrollability);

    const resizeObserver = new ResizeObserver(checkForScrollability);
    resizeObserver.observe(container);

    return () => {
      window.removeEventListener("resize", checkForScrollability);
      resizeObserver.unobserve(container);
    };
  }, [mediaItems, checkForScrollability]);

  if (!mediaItems || mediaItems?.length === 0) return null;

  return (
    <div className="w-fulls">
      {/* Main Media Display */}
      <div className="relative w-full aspect-video rounded-lg shadow-md">
        {currentMedia?.type === "image" ? (
          <Image
            src={currentMedia?.url}
            alt={currentMedia?.alt}
            fill
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            src={currentMedia?.url}
            controls
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        )}

        {/* Index Counter */}
        <div className="absolute top-3 right-3">
          <Badge variant="secondary">
            {activeMediaIndex + 1} / {mediaItems.length}
          </Badge>
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="relative mt-2.5">
        {canScrollLeft && (
          <button
            onClick={() => handleThumbScroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/75 hover:bg-black/90 p-1 rounded-full shadow-xl duration-300 transition-colors"
          >
            <ChevronLeft className="size-6" />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          onScroll={checkForScrollability}
          className="flex space-x-2.5 overflow-x-hidden p-1.5 "
        >
          {mediaItems?.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveMediaIndex(index)}
              className={cn(
                "relative flex-shrink-0 w-30 h-20 rounded-md overflow-hidden opacity-55 hover:opacity-100 transition-opacity duration-300 cursor-pointer",
                activeMediaIndex === index &&
                  "ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-900"
              )}
            >
              <Image
                src={item.thumbnail}
                alt={item.alt}
                fill
                className="w-full h-full object-cover"
              />

              {item?.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="size-8 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {canScrollRight && (
          <button
            onClick={() => handleThumbScroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/75 hover:bg-black/90 p-1 rounded-full shadow-xl duration-300 transition-colors"
          >
            <ChevronRight className="size-6" />
          </button>
        )}
      </div>
    </div>
  );
};
