"use client";
import { aboutContent } from "@utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Button } from "./Button";

export function About({ classname }: { classname?: string }) {
  return (
    <section className={classname}>
      <div className="container mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full lg:w-10/12 mx-auto gap-0 md:gap-3">
          {/* Image */}
          <div className="lg:w-7/12 md:w-9/12 relative md:order-1 order-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              className="z-[2] relative bg-cover bg-center md:block hidden">
              <Image
                src={aboutContent.image.hero.src}
                alt={aboutContent.image.hero.alt}
                width={0}
                height={0}
                sizes="50vw"
                className="lg:w-[29rem] lg:h-[30rem] md:w-[20rem] md:h-[21rem] w-[20rem] h-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              viewport={{ once: true }}>
              <Image
                src={aboutContent.image.dots.src}
                alt={aboutContent.image.dots.alt}
                width={0}
                height={0}
                sizes="33vw"
                className="absolute bottom-0 -right-10 w-64 md:block hidden"
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="z-[3] md:order-2 order-1 space-y-5">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              className="prevent-select font-semibold text-primary lg:text-4xl text-3xl md:w-[25rem] lg:w-[31rem]">
              {aboutContent.title}
            </motion.h2>
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              className="flex items-center justify-center z-[2] relative bg-cover bg-center md:hidden">
              <Image
                src={aboutContent.image.hero.src}
                alt="hero image"
                width={0}
                height={0}
                sizes="50vw"
                className="w-[28rem] h-[19rem]"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              className="lg:w-[28rem] md:w-[24rem] lg:text-base md:text-sm">
              {aboutContent.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}>
              <Button classname="button" label="Learn About Us" href="/about" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
