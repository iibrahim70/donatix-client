"use client";

import data from "@/assets/data/gallery-images.json";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import { ChevronFirst, ChevronLast, X } from "lucide-react";
import { useLenis } from "lenis/react";

export const GridGallery = () => {
  const lenis = useLenis();
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const goToNext = useCallback(() => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex + 1) % data?.length);
  }, [currentIndex]);

  const goToPrev = useCallback(() => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex - 1 + data?.length) % data?.length);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (currentIndex === null || currentIndex === undefined) return;

      if (event?.key === "ArrowRight") goToNext();
      if (event?.key === "ArrowLeft") goToPrev();
      if (event?.key === "Escape") setCurrentIndex(null);
    };

    window.addEventListener("keyup", handleKeyPress);

    return () => {
      window.removeEventListener("keyup", handleKeyPress);
    };
  }, [currentIndex, goToNext, goToPrev]);

  useEffect(() => {
    const enableScroll = () => {
      document.body.style.overflowY = "auto";
      document.body.style.touchAction = "auto";
      lenis?.start(); // Resume Lenis scrolling
    };

    const disableScroll = () => {
      document.body.style.overflowY = "hidden";
      document.body.style.touchAction = "none";
      lenis?.stop(); // Pause Lenis scrolling
    };

    if (currentIndex !== null) disableScroll();
    else enableScroll();

    return () => {
      enableScroll();
    };
  }, [currentIndex, lenis]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {data?.map((item, index) => (
        <div
          key={index}
          className={cn(
            "relative group h-[250px] border rounded-md shadow-md cursor-pointer overflow-hidden",
            (index === 1 || index === 4 || index === 5) && "row-span-2 h-full"
          )}
          onClick={() => setCurrentIndex(index)}
        >
          <Image
            src={item?.src}
            alt={item?.alt}
            width={500}
            height={500}
            className="h-full w-full object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-center py-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white">{item?.alt}</p>
          </div>
        </div>
      ))}

      {/* Full view */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          onClick={() => setCurrentIndex(null)}
        >
          {/* Closing button */}
          <X
            size={25}
            onClick={() => setCurrentIndex(null)}
            className="absolute top-5 right-5 opacity-85 hover:opacity-100 cursor-pointer"
          />

          {/* Index */}
          <div className="absolute top-5 left-5">
            <Badge variant="outline" className="font-semibold text-sm">
              {currentIndex + 1} / {data?.length}
            </Badge>
          </div>

          <div
            className="relative flex items-center justify-between gap-5 w-full max-w-7xl"
            onClick={(e) => e.stopPropagation()}
          >
            <ChevronFirst
              size={35}
              onClick={goToPrev}
              className="opacity-85 hover:opacity-100 cursor-pointer"
            />

            <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
              <Image
                key={data[currentIndex]?.src}
                src={data[currentIndex]?.src}
                width={500}
                height={500}
                alt={data[currentIndex]?.alt}
                className="w-full h-full rounded-md"
              />
            </div>

            <ChevronLast
              size={35}
              onClick={goToNext}
              className="opacity-85 hover:opacity-100 cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
};
