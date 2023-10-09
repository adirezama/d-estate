"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroContent } from "@utils";

export function Hero({ classname }: { classname?: string }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgScroll = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imgScroll2 = useTransform(scrollYProgress, [0, 1], ["100%", "50%"]);
  return (
    <section className={classname} ref={ref}>
      <div className="container px-5 md:px-20 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between w-full mx-auto md:min-h-[600px] lg:h-screen lg:min-h-[700px]">
          <div className="md:w-4/12 inline-block z-[3] relative space-y-6">
            {heroContent.intro.title && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1, duration: 0.3 },
                }}
                viewport={{ once: true }}
                className="w-[24rem] md:w-[28rem] lg:w-[48rem] lg:text-7xl md:text-4xl text-4xl inline-block font-semibold font-manrope text-primary">
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
                viewport={{ once: true }}
                className="w-[24rem] md:w-[28rem] text-sm md:text-base leading-relaxed inline-block ">
                {heroContent.intro.description}
              </motion.p>
            )}
          </div>
          <div className="md:w-4/12 relative mt-10 md:mt-0 md:py-20">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              viewport={{ once: true }}
              style={{ y: imgScroll }}
              className="z-[2] relative bg-cover bg-center">
              <Image
                src={`/hero1.png`}
                alt="hero image"
                width={0}
                height={0}
                sizes="50vw"
                className="md:w-[20rem] md:h-fit w-full h-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              viewport={{ once: true }}
              style={{ y: imgScroll2 }}>
              <Image
                src="/dots-black.svg"
                alt="Dots background image"
                width={0}
                height={0}
                sizes="33vw"
                className="absolute bottom-0 -left-[100px] w-64"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
