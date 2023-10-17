"use client";
import { storyContent } from "@utils";
import { m, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";

export function Story({ classname }: { classname?: string }) {
  return (
    <section className={classname}>
      <div className="container px-5 md:px-10 mx-auto">
        <div className="md:flex w-full md:w-10/12 mx-auto items-stretch md:gap-7">
          <div className="md:w-1/3 self-center space-y-7 mb-7 md:m-0">
            <LazyMotion features={domAnimation}>
              {storyContent.column1.imgs.map((item, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.5, duration: 0.5 },
                  }}
                  viewport={{ once: true }}>
                  <Image
                    alt={item.alt}
                    src={item.img}
                    width={item.width}
                    height={item.height}
                    className={`${
                      item.tailwindClass ? item.tailwindClass : ""
                    } max-w-full object-cover object-center`}
                  />
                </m.div>
              ))}
            </LazyMotion>
          </div>
          <div className="md:w-1/3 space-y-7 mb-7 md:mb-0">
            <LazyMotion features={domAnimation}>
              {storyContent.column2.imgs.map((item, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.5, duration: 0.5 },
                  }}
                  viewport={{ once: true }}>
                  <Image
                    alt={item.alt}
                    src={item.img}
                    width={item.width}
                    height={item.height}
                    className={`${
                      item.tailwindClass ? item.tailwindClass : ""
                    } max-w-full object-cover object-center`}
                  />
                </m.div>
              ))}
            </LazyMotion>
          </div>
          <div className="md:w-1/3 self-center space-y-7">
            <LazyMotion features={domAnimation}>
              {storyContent.column3.imgs.map((item, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.5, duration: 0.5 },
                  }}
                  viewport={{ once: true }}>
                  <Image
                    alt={item.alt}
                    src={item.img}
                    width={item.width}
                    height={item.height}
                    className={` max-w-full object-cover object-center`}
                  />
                </m.div>
              ))}
            </LazyMotion>
          </div>
        </div>
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.8, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="lg:flex flex-col mt-32 text-left w-full lg:w-1/2 mx-auto">
            <h2 className="text-2xl md:text-3xl text-gray-800 mb-5">
              {storyContent.storyText.heading}
            </h2>
            <p className="leading-relaxed text-gray-500 mb-7">
              {storyContent.storyText.p1}
            </p>
            <p className="leading-relaxed text-gray-500 mb-7">
              {storyContent.storyText.p2}
            </p>
            <p>
              <Image
                src={storyContent.storyText.signature}
                alt={storyContent.storyText.name}
                width={338}
                height={113}
                className="w-48 mb-2"
              />
              <strong className="block mb-2 text-gray-800 font-medium">
                {storyContent.storyText.name + " "}
                <span className="text-gray-400">
                  {storyContent.storyText.roleTitle}
                </span>
              </strong>
            </p>
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
}
