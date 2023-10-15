"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import { testimonialsContent } from "@utils";

export function Testimonials({ classname }: { classname?: string }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState<boolean | null>(null);
  const [isEnd, setIsEnd] = useState<boolean | null>(null);
  const sliderRef = useRef<SwiperRef>(null);

  useEffect(() => {
    if (!sliderRef.current) return;
    setIsEnd(sliderRef.current.swiper.isEnd);
    setIsBeginning(sliderRef.current.swiper.isBeginning);
  }, [slideIndex]);

  const prevHandle = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);
  const nextHandle = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef?.current.swiper.slideNext();
  }, []);

  return (
    <section className={`${classname} overflow-hidden`}>
      <LazyMotion features={domAnimation}>
        <div className="container px-5 md:px-10 mx-auto">
          <div className="flex justify-center">
            <div className="flex items-center w-full md:w-10/12">
              <div className="text-center w-auto md:w-screen max-w-full md:max-w-xl mx-auto mb-16">
                <m.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.05, duration: 0.2 },
                  }}
                  className="uppercase tracking-[3px] text-base mb-5 inline-block text-primary">
                  {testimonialsContent.heading.subTitle}
                </m.span>
                <m.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.1, duration: 0.2 },
                  }}
                  className="text-2xl lg:text-4xl text-primary">
                  {testimonialsContent.heading.title}
                </m.h2>
              </div>
            </div>
          </div>
          <div className="lg:flex justify-center">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.15, duration: 0.2 },
              }}
              viewport={{ once: true }}
              className="w-full lg:w-10/12 lg:flex items-center">
              <Swiper
                ref={sliderRef}
                speed={700}
                spaceBetween={30}
                onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
                className="py-16 mb-7 relative flex items-center">
                {testimonialsContent.testimonials.map((testimonial) => (
                  <SwiperSlide
                    key={testimonial.name}
                    className="w-full prevent-select border rounded-2xl overflow-hidden">
                    <div className="block md:flex items-stretch bg-white shadow-xl">
                      <div className="md:w-1/3 aspect-square">
                        <Image
                          src={testimonial.img}
                          alt={testimonial.name}
                          width={400}
                          height={400}
                          sizes="(min-width: 1540px) 404px, (min-width: 1280px) 333px, (min-width: 1060px) 262px, (min-width: 780px) 229px, (min-width: 680px) 600px, calc(94.44vw - 23px)"
                          className="object-cover object-center !h-full !w-full"
                        />
                      </div>
                      <div className="md:w-2/3 p-7 md:p-16 flex items-center">
                        <div>
                          <blockquote className="text-lg mb-7">
                            <span className="text-[200px] relative block text-gray-300">
                              &ldquo;
                            </span>
                            {testimonial.quote}
                          </blockquote>
                          <div className="flex space-x-3 text-sm">
                            <strong>{testimonial.name}</strong>
                            <span>&mdash;</span>
                            <span>{testimonial.title}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </m.div>
          </div>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="flex justify-center">
            <div className="flex space-x-3">
              <div
                onClick={prevHandle}
                className={`${
                  isBeginning == true
                    ? "opacity-30 bg-gray-300 text-gray-600 !cursor-pointer"
                    : "opactiy-100 bg-white text-primary"
                } relative top-0 group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer rounded-full inline-flex justify-center items-center`}>
                <BiChevronLeft
                  className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-blueDark ${
                    isBeginning == true
                      ? "group-hover:!text-gray-600"
                      : "group-hover:text-white"
                  }`}
                />
              </div>

              <div
                onClick={nextHandle}
                className={`${
                  isEnd === true
                    ? "opacity-30 bg-gray-300 text-gray-600 !cursor-pointer"
                    : "opactiy-100 bg-white text-primary"
                } relative top-0 group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer rounded-full inline-flex justify-center items-center`}>
                <BiChevronRight
                  className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-blueDark ${
                    isEnd === true
                      ? "group-hover:!text-gray-600"
                      : "group-hover:text-white"
                  }`}
                />
              </div>
            </div>
          </m.div>
        </div>
      </LazyMotion>
    </section>
  );
}
