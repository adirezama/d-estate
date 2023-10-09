"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroContent } from "@utils";

export function Hero({ classname }: { classname?: string }) {
  const ref = useRef(null);

  return (
    <section className={classname} ref={ref}>
      <div className="container mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between w-full lg:w-10/12 mx-auto md:min-h-[500px] lg:h-screen lg:min-h-[600px]">
          {/* Content */}
          <div className="md:w-4/12 z-[3] space-y-6 mb-5">
            {heroContent.intro.title && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1, duration: 0.3 },
                }}
                className="md:w-[34rem] lg:w-[48rem] lg:text-7xl md:text-5xl text-[1.75rem] md:inline-block font-semibold font-manrope text-primary">
                {heroContent.intro.title}
              </motion.h1>
            )}
            {heroContent.intro.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.3 },
                }}
                className="md:w-[28rem] text-sm md:text-base leading-relaxed inline-block ">
                {heroContent.intro.description}
              </motion.p>
            )}
          </div>
          {/* Image */}
          <div className="md:w-4/12 md:py-20">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              className="z-[2] relative bg-cover bg-center">
              <Image
                src={`/hero1.png`}
                alt="hero image"
                width={0}
                height={0}
                sizes="50vw"
                className="lg:w-[29rem] lg:h-[30rem] md:w-[20rem] md:h-[21rem] w-[28rem] h-[19rem]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              viewport={{ once: true }}>
              <Image
                src="/dots-black.svg"
                alt="Dots background image"
                width={0}
                height={0}
                sizes="33vw"
                className="absolute bottom-0 -left-[100px] w-64 md:block hidden"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
