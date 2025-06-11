"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { PlayCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Define the shape of a single media item
type MediaItem = {
  type: "image" | "video";
  url: string;
  thumbnail: string;
  alt: string;
};

const MediaGallery = ({ items }: { items: MediaItem[] }) => {
  if (!items || items.length === 0) {
    return null;
  }

  const [activeMedia, setActiveMedia] = useState<MediaItem>(items[0]);

  // Ref to get direct access to the scrollable container DOM element
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // State to determine if the scroll buttons should be visible
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // A function to check the scroll position and update the button visibility
  const checkForScrollability = useCallback(() => {
    const container = scrollContainerRef?.current;

    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); // -1 for precision
    }
  }, []);

  // Run the check when the component mounts or when items change
  useEffect(() => {
    checkForScrollability();
    window.addEventListener("resize", checkForScrollability);
    return () => window.removeEventListener("resize", checkForScrollability);
  }, [items, checkForScrollability]);

  // Function to handle the actual scrolling
  const handleScroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      <div className="w-full h-auto aspect-video rounded-lg overflow-hidden">
        {activeMedia?.type === "image" ? (
          <Image
            src={activeMedia?.url}
            alt={activeMedia?.alt}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            src={activeMedia.url}
            controls
            autoPlay
            muted
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <div className="relative mt-3.5">
        {canScrollLeft && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white p-1 rounded-full transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Thumbnail Strip */}
        <div
          ref={scrollContainerRef}
          onScroll={checkForScrollability}
          className="flex space-x-3.5 overflow-x-auto p-2 scrollbar"
        >
          {items?.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveMedia(item)}
              className={`relative flex-shrink-0 w-28 h-20 rounded-md overflow-hidden focus:outline-none transition-all duration-200
                ${
                  activeMedia.url === item.url
                    ? "ring-2 ring-deep-teal ring-offset-2 ring-offset-slate-900"
                    : "opacity-60 hover:opacity-100"
                }`}
            >
              <img
                src={item.thumbnail}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
              {item?.type === "video" && (
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <PlayCircle className="w-8 h-8 text-white" />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Right Arrow Button */}
        {canScrollRight && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white p-1 rounded-full transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default MediaGallery;
