"use client";

import { teamContent } from "@utils";
import { m, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RxTwitterLogo } from "react-icons/rx";
import { SlSocialLinkedin } from "react-icons/sl";

export function Team({ classname }: { classname: string }) {
  return (
    <LazyMotion features={domAnimation}>
      <section className={classname}>
        <div className="container px-5 md:px-10 mx-auto">
          <div className="lg:flex justify-center mb-20 lg:mb-36">
            <div className="w-full lg:w-10/12 lg:flex gap-7 items-center">
              <div className="lg:w-7/12 mb-5 lg:mb-0">
                <m.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  className="uppercase tracking-[3px] text-sm mb-5 inline-block text-gray-500">
                  {teamContent.heading.subTitle}
                </m.span>
                <m.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.3, duration: 0.5 },
                  }}
                  className="text-2xl lg:text-4xl">
                  {teamContent.heading.title}{" "}
                </m.h2>
              </div>
              <div className="lg:w-5/12 self-end">
                <m.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.6, duration: 0.5 },
                  }}
                  className="text-gray-500">
                  {teamContent.heading.description}
                </m.p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:w-10/12 mx-auto">
            {teamContent.team.map((member, index) => (
              <m.div
                key={member.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2 * index, duration: 0.5 },
                }}
                className="bg-white relative overflow-hidden">
                <Link href="#">
                  <Image
                    src={member.image}
                    alt="Image"
                    width={400}
                    height={400}
                    className="object-cover object-top w-full !max-h-72 !max-w-full"
                  />
                </Link>
                <div className="p-8">
                  <h3 className="mb-0.5">{member.name}</h3>
                  <p className="text-gray-500 uppercase text-xs tracking-[1px] mb-4">
                    {member.role}
                  </p>
                  <div className="mt-5 flex space-x-5 items-center">
                    <Link
                      href={member.twitter}
                      className="duration-300 transition-all ease-in-out hover:opacity-30">
                      <RxTwitterLogo className="text-lg" />
                    </Link>
                    <Link
                      href={member.linkedin}
                      className="duration-300 transition-all ease-in-out hover:opacity-30">
                      <SlSocialLinkedin className="text-lg" />
                    </Link>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
