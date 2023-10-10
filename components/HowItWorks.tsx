"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { howItWorksContent } from "@utils";

export function HowItWorks({ classname }: { classname?: string }) {
  return (
    <>
      <section className={classname}>
        <div className="container px-5 md:px-10 mx-auto">
          <div className="lg:flex items-center justify-center mb-20 lg:mb-36">
            <div className="w-full lg:w-10/12 lg:flex items-center">
              {/* Heading Container */}
              <div className="prevent-select lg:w-6/12 mb-5 lg:mb-0">
                {/* Heading subTitle */}
                {howItWorksContent.heading.subTitle && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.2, duration: 0.5 },
                    }}
                    className="uppercase mb-5 inline-block text-primary tracking-[3px]">
                    {howItWorksContent.heading.subTitle}
                  </motion.span>
                )}
                {/* Heading title */}
                {howItWorksContent.heading.title && (
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.3, duration: 0.5 },
                    }}
                    className="text-2xl lg:text-4xl">
                    {howItWorksContent.heading.title}
                  </motion.h2>
                )}
              </div>
              {/* Heading Container Description */}
              <div className="lg:w-5/12 self-end">
                {howItWorksContent.heading.description && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.5, duration: 0.5 },
                    }}
                    className="text-primary">
                    {howItWorksContent.heading.description}
                  </motion.p>
                )}
              </div>
            </div>
          </div>
          {/* Card Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 -mb-72 lg:w-10/12 mx-auto">
            {howItWorksContent.steps.map((step, index) => (
              // Card Container
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2 * index,
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.1, ease: "easeInOut" },
                }}
                className="group duration-300 pt-32 px-10 pb-20 bg-white relative overflow-hidden hover:bg-blue-300 hover:shadow-2xl">
                <span className="prevent-select text-[200px] inline-block z-[1] font-semibold absolute -top-[120px] opacity-5 left-0">
                  {step.number}
                </span>
                <div className="absolute top-10 right-10">
                  <span className="text-3xl text-primary duration-300 transition-all ease-in-out group-hover:text-white">
                    <step.icon />
                  </span>
                </div>
                <div className="prevent-select relative z-10 flex gap-3 items-start">
                  <div className="font-semibold duration-300 transition-all ease-in-out group-hover:text-white group-hover:text-opacity-50">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="prevent-select text-xl mb-4 duration-300 transition-all ease-in-out group-hover:text-white">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed mb-7 duration-300 transition-all ease-in-out group-hover:text-white">
                    {step.description}
                  </p>
                  <Link
                    className="text-xs tracking-[2px] uppercase border-b-2 pb-2 inline-block duration-300 transition-all ease-in-out group-hover:border-white group-hover:text-white"
                    href={step.btn.href}>
                    {step.btn.label}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="pt-72 lg:pt-60 pb-32 bg-blue-300 ">
        <div className="container px-5 md:px-10 mx-auto">
          <div className="lg:flex justify-center">
            <div className="w-full lg:w-8/12 flex gap-0 items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {howItWorksContent.features.map((feature, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.2 * index,
                        duration: 0.5,
                        ease: "easeInOut",
                      },
                    }}
                    key={feature.title}
                    className="relative z-10 flex gap-3 items-start">
                    <div>
                      <span className="text-3xl text-white">
                        <feature.icon />
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg mb-4 text-white">
                        {feature.title}
                      </h3>
                      <p className="leading-relaxed text-white text-opacity-70 mb-7">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
