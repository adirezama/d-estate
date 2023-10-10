"use client";
import { servicesContent } from "@utils";
import { Button } from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";

export function Services({ classname }: { classname?: string }) {
  return (
    <section className={classname}>
      <div className="container px-5 md:px-10 mx-auto py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-6 gap-0 mx-auto lg:w-10/12">
          {/* Offers */}
          <div className="flex flex-col gap-6 md:gap-12 md:w-[365px] max-w-[26rem] md:order-1 order-2">
            {servicesContent.offers.map((offer, index) => (
              <div
                key={offer.title}
                className="flex flex-col items-start justify-center gap-2 md:gap-4">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.1 * index, duration: 0.5 },
                  }}
                  className="prevent-select text-3xl font-semibold font-manrope text-primary tracking-[1.5px]">
                  {offer.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.2 * index, duration: 0.5 },
                  }}
                  className=" leading-relaxed text-primary">
                  {offer.description}
                </motion.p>
              </div>
            ))}
          </div>
          {/* Headline */}
          <div className="md:w-[33.25rem] space-y-4 md:order-2 order-1 md:mb-0 mb-5">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              className="prevent-select text-primary md:text-[2.625rem] text-4xl leading-tight font-semibold">
              {servicesContent.headline.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              className="text-primary text-base">
              {servicesContent.headline.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}>
              <Button classname="button" label="Talk To Us" href="/contact" />
            </motion.div>
            <div className="flex relative md:h-[25rem]">
              {servicesContent.headline.images.map((img) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.8, duration: 0.5 },
                  }}
                  className="flex justify-center basis-1/2 lg:absolute lg:first:top-0 lg:first:left-0 lg:last:-top-6 lg:last:right-0">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={0}
                    height={0}
                    sizes="50vw"
                    className="md:w-[16rem] md:h-[20rem] w-[12rem] h-[15rem]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
