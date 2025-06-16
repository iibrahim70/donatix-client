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

  const [activeIndex, setActiveIndex] = useState(0);
  const activeMedia = items[activeIndex];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkForScrollability = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    checkForScrollability();
    window.addEventListener("resize", checkForScrollability);
    // Add a ResizeObserver for better reliability
    const resizeObserver = new ResizeObserver(checkForScrollability);
    resizeObserver.observe(container);

    return () => {
      window.removeEventListener("resize", checkForScrollability);
      resizeObserver.unobserve(container);
    };
  }, [items, checkForScrollability]);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount =
        (direction === "left" ? -1 : 1) * container.clientWidth * 0.75;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* Main Media Display */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
        {activeMedia.type === "image" ? (
          <Image
            key={activeMedia.url} // Add key for smooth transitions
            src={activeMedia.url}
            alt={activeMedia.alt}
            fill // Use fill for better responsiveness
            priority={activeIndex === 0} // Load the first image faster
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            key={activeMedia.url} // Key ensures video re-renders on src change
            src={activeMedia.url}
            controls
            autoPlay
            muted // Muted is often required for autoplay to work
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        )}

        {/* Index Counter */}
        <div className="absolute top-3 right-3 bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
          {activeIndex + 1} / {items.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="relative mt-4">
        {canScrollLeft && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 p-1 rounded-full shadow-md transition-colors"
          >
            <ChevronLeft size={22} />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          onScroll={checkForScrollability}
          className="flex space-x-3 overflow-x-auto p-2 scrollbar"
        >
          {items.map((item, index) => (
            <button
              key={item.thumbnail}
              onClick={() => setActiveIndex(index)}
              className={`relative flex-shrink-0 w-28 h-20 rounded-md overflow-hidden focus:outline-none transition-all duration-300
                ${
                  activeIndex === index
                    ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-900"
                    : "opacity-60 hover:opacity-100"
                }`}
            >
              <Image
                src={item.thumbnail}
                alt={item.alt}
                fill
                className="w-full h-full object-cover"
              />
              {item.type === "video" && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <PlayCircle className="w-8 h-8 text-white/90" />
                </div>
              )}
            </button>
          ))}
        </div>

        {canScrollRight && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 p-1 rounded-full shadow-md transition-colors"
          >
            <ChevronRight size={22} />
          </button>
        )}
      </div>
    </div>
  );
};

export default MediaGallery;
