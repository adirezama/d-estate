"use client";

import React, { useRef } from "react";
import {
  m,
  LazyMotion,
  domAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import { whyUsContent } from "@utils";
import Image from "next/image";

export function WhyUs({ classname }: { classname: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const img1 = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  return (
    <LazyMotion features={domAnimation}>
      <section className={classname} ref={ref}>
        <div className="container px-5 md:px-10 mx-auto">
          <div className="text-center lg:max-w-xl mx-auto mb-20 lg:mb-32 ">
            <m.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              className="uppercase tracking-[3px] text-xs mb-5 leading-none text-gray-500">
              {whyUsContent.heading.subTitle}
            </m.span>
            <m.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              className="text-2xl lg:text-4xl">
              {whyUsContent.heading.title}
            </m.h2>
          </div>
          <div className="lg:flex justify-center">
            <div className="lg:w-2/3 lg:flex gap-20 item-start">
              <div className="mb-7 lg:mb-0 lg:w-1/2 lg:order-2">
                <m.div
                  style={{ y: img1 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.4, duration: 0.5 },
                  }}
                  viewport={{ once: true }}>
                  <Image
                    src="/images/img-square-2-min.jpg"
                    alt="Image"
                    width={400}
                    height={300}
                    className="object-cover !w-full h-[500px] lg:max-w-2xl object-center"
                  />
                </m.div>
              </div>
              <div className="lg:w-1/2">
                <m.ul
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.6, duration: 0.5 },
                  }}>
                  {whyUsContent.whyUsItems.map((item, index) => (
                    <li
                      key={item.title}
                      className="flex space-x-4 items-start mb-7">
                      <span className="text-xl flex-none inline-flex justify-center items-center w-12 h-12 rounded-full relative bg-blueLight">
                        {<item.icon className="z-[5] relative text-white" />}
                      </span>
                      <div>
                        <h3 className="text-gray-800 text-base mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-500">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </m.ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
