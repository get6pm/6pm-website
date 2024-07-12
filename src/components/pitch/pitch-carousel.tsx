"use client";

import { SectionStart } from "@/components/pitch/section-start";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { CarouselToolbar } from "./carousel-toolbar";
import { SectionInvest } from "./section-invest";

export function PitchCarusel() {
  return (
    <Carousel className="w-full min-h-full relative">
      <CarouselContent>
        <CarouselItem>
          <SectionStart />
        </CarouselItem>
        <CarouselItem>
          <SectionInvest />
        </CarouselItem>
      </CarouselContent>

      <CarouselToolbar views={31029} />
    </Carousel>
  );
}
