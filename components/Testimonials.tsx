"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function Testimonials({ classname }: { classname?: string }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(null);
  const [isEnd, setIsEnd] = useState(null);
  const sliderRef = useRef(null);
  return (
    <section className={`${classname} overflow-hidden`}>
      <div className="container px-5 md:px-10 mx-auto">
        <div className="flex justify-center">
          <div className="flex items-center w-full md:w-8/12"></div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
