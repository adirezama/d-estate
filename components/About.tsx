"use client";
import { aboutContent } from "@utils";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function About({ classname }: { classname?: string }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgScroll = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imgScroll2 = useTransform(scrollYProgress, [0, 1], ["100%", "50%"]);
  return (
    <section className={classname} ref={ref}>
      <div className="container mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between w-full lg:w-10/12 mx-auto gap-5">
          {/* Image */}
          <div className="lg:w-7/12 md:w-9/12 relative md:order-1 order-2 inline-block">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              style={{ y: imgScroll }}
              className="z-[2] relative bg-cover bg-center">
              <Image
                src={aboutContent.image.hero.src}
                alt={aboutContent.image.hero.alt}
                width={0}
                height={0}
                sizes="50vw"
                className="lg:w-[29rem] lg:h-[30rem] md:max-w-[20rem] md:h-[21rem] w-[25rem] h-full "
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
                src={aboutContent.image.dots.src}
                alt={aboutContent.image.dots.alt}
                width={0}
                height={0}
                sizes="33vw"
                className="absolute bottom-0 -right-10 w-64"
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="z-[3] space-y-6 md:order-2 order-1">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              className="font-semibold lg:text-4xl md:text-[2rem] text-[1.75rem] md:w-[25rem] lg:w-[31rem]">
              {aboutContent.title}
            </motion.h2>
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
          </div>
        </div>
      </div>
    </section>
  );
}
