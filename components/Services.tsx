"use client";
import { servicesContent } from "@utils";
import { Button } from "./Button";
import Image from "next/image";
import { delay, motion } from "framer-motion";

export function Services({ classname }: { classname?: string }) {
  return (
    <section className={classname}>
      <div className="container px-5 md:px-10 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mx-auto lg:w-10/12">
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
                    transition: { delay: 0.2 * index, duration: 0.5 },
                  }}
                  className="text-3xl font-semibold font-manrope text-primary">
                  {offer.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.3 * index, duration: 0.5 },
                  }}
                  className=" leading-relaxed text-primary">
                  {offer.description}
                </motion.p>
              </div>
            ))}
          </div>
          {/* Headline */}
          <div className="md:w-[33.25rem] space-y-6 md:order-2 order-1">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              className="text-primary text-[2.625rem] font-semibold">
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
            <div className="flex relative h-[25rem]">
              {servicesContent.headline.images.map((img) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.8, duration: 0.5 },
                  }}
                  className="basis-1/2 absolute first:top-0 first:left-0 last:-top-6 last:right-0">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={0}
                    height={0}
                    sizes="50vw"
                    className="md:w-[16rem] md:h-[27rem] w-[15rem] h-[18rem]"
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
