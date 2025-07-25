"use client";
import { servicesContent } from "@utils";
import { Button } from "../Button";
import Image from "next/image";
import { LazyMotion, domAnimation, m } from "framer-motion";

export function Services({ classname }: { classname?: string }) {
  return (
    <section className={classname}>
      <LazyMotion features={domAnimation}>
        <div className="container px-5 md:px-10 mx-auto py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-6 gap-0 mx-auto lg:w-10/12">
            {/* Offers */}
            <div className="flex flex-col gap-6 md:gap-12 md:w-[365px] max-w-[26rem] md:order-1 order-2">
              {servicesContent.offers.map((offer, index) => (
                <div
                  key={offer.title}
                  className="flex flex-col items-start justify-center gap-2 md:gap-4">
                  <m.h1
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.1 * index, duration: 0.2 },
                    }}
                    className="prevent-select text-3xl font-semibold font-manrope text-primary tracking-[1.5px]">
                    {offer.title}
                  </m.h1>
                  <m.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: 0.15 * index,
                        duration: 0.3,
                        staggerDirection: -1,
                      },
                    }}
                    className=" leading-relaxed text-primary">
                    {offer.description}
                  </m.p>
                </div>
              ))}
            </div>
            {/* Headline */}
            <div className="md:w-[33.25rem] space-y-4 md:order-2 order-1 md:mb-0 mb-5">
              <m.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.05, duration: 0.2 },
                }}
                className="prevent-select text-primary md:text-[2.625rem] text-4xl leading-tight font-semibold">
                {servicesContent.headline.title}
              </m.h2>
              <m.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.15, duration: 0.2 },
                }}
                className="text-primary text-base">
                {servicesContent.headline.description}
              </m.p>
              <m.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.2, duration: 0.2 },
                }}>
                <Button classname="button" label="Talk To Us" href="/contact" />
              </m.div>
              <div className="flex items-center justify-center gap-5 relative lg:h-[25rem]">
                {servicesContent.headline.images.map((img) => (
                  <m.div
                    key={img.src}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.2, duration: 0.3 },
                    }}
                    viewport={{ once: true }}
                    className="z-[2] bg-cover bg-center lg:absolute lg:first:left-0 lg:first:bottom-0 lg:last:-top-0 lg:last:right-0">
                    <Image
                      src={img.src}
                      alt="hero image"
                      width={250}
                      height={350}
                      sizes="(min-width: 480px) 400px, 87.5vw"
                      className="shadow-2xl h-[20rem]"
                    />
                  </m.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </LazyMotion>
    </section>
  );
}
