"use client";
import { aboutHeroContent } from "@utils";
import { m, LazyMotion, domAnimation } from "framer-motion";

export function Hero({ classname }: { classname?: string }) {
  return (
    <LazyMotion features={domAnimation}>
      <section className={classname}>
        <div className="container px-5 md:px-10 mx-auto">
          <div className="lg:flex w-full lg:w-10/12 mx-auto items-center justify-between">
            <div className="text-center lg:max-w-4xl mx-auto">
              <m.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.05, duration: 0.5 },
                }}
                className="uppercase tracking-[3px] text-xs mb-5 inline-block text-primary">
                {aboutHeroContent.heading.subTitle}
              </m.span>
              <m.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1, duration: 0.5 },
                }}
                className="text-3xl sm:text-4xl md:text-5xl">
                {aboutHeroContent.heading.title}
              </m.h1>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
