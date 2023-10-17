"use client";
import { LazyMotion, domAnimation, m } from "framer-motion";

export function Hero({
  classname,
  title,
  subTitle,
}: {
  classname: string;
  title: string;
  subTitle: string;
}) {
  return (
    <section className={classname}>
      <div className="container px-5 md:px-10 mx-auto">
        <div className="flex items-center w-full md:w-10/12 mx-auto">
          <div className="text-center w-auto md:w-screen max-w-full md:max-w-xl mx-auto">
            <LazyMotion features={domAnimation}>
              <m.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.05, duration: 0.2 },
                }}
                className="uppercase tracking-[3px] text-base mb-5 inline-block text-primary">
                {subTitle}
              </m.span>
              <m.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1, duration: 0.2 },
                }}
                className="text-2xl lg:text-4xl text-primary uppercase font-manrope">
                {title}
              </m.h2>
            </LazyMotion>
          </div>
        </div>
      </div>
    </section>
  );
}
