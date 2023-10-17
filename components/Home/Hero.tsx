"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { heroContent } from "@utils";

export function Hero({ classname }: { classname?: string }) {
  const ref = useRef(null);

  return (
    <section className={classname} ref={ref}>
      <div className="container mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 w-full lg:w-10/12 mx-auto md:min-h-[500px] ">
          {/* Content */}
          <div className="md:w-4/12 z-[3] space-y-6">
            <LazyMotion features={domAnimation}>
              {heroContent.intro.title && (
                <m.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  className="text-primary prevent-select md:w-[34rem] lg:w-[48rem] lg:text-7xl text-4xl md:inline-block font-semibold font-manrope">
                  {heroContent.intro.title}
                </m.h1>
              )}
              {heroContent.intro.description && (
                <m.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.3 },
                  }}
                  className="md:w-[28rem] text-sm md:text-base leading-relaxed inline-block text-primary">
                  {heroContent.intro.description}
                </m.p>
              )}
            </LazyMotion>
          </div>
          {/* Image */}
          <div className="md:w-4/12 md:py-20 relative">
            <LazyMotion features={domAnimation}>
              <m.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
                viewport={{ once: true }}
                className="z-[2] relative">
                <Image
                  src={`/hero1.png`}
                  alt="hero image"
                  width={320}
                  height={400}
                  priority={true}
                  className="h-[420px] md:h-auto"
                  sizes="(min-width: 1280px) 320px, (min-width: 1040px) 262px, (min-width: 780px) 229px, (min-width: 400px) 320px, calc(75vw + 35px)"
                />
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                  opacity: 1,
                  y: 20,
                  transition: { delay: 0.3, duration: 0.4 },
                }}
                viewport={{ once: true }}>
                <Image
                  src="/dots-black.svg"
                  alt="Dots background image"
                  width={100}
                  height={100}
                  sizes="33vw"
                  className="absolute bottom-0 -left-[100px] w-64 md:block hidden"
                />
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </div>
    </section>
  );
}
