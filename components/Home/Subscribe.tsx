"use client";
import { subscribeContent } from "@utils";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { BiSolidPaperPlane } from "react-icons/bi";
export function Subscribe({ classname }: { classname?: string }) {
  return (
    <LazyMotion features={domAnimation}>
      <section className={classname}>
        <div className="container px-5 md:px-10 mx-auto">
          <div className="flex justify-center">
            <div className="w-10/12 flex items-center">
              <div className="text-center w-screen max-w-md mx-auto mb-10">
                <m.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.2, delay: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[3px] text-xs mb-5 inline-block text-white">
                  {subscribeContent.heading.subTitle}
                </m.span>
                <m.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3, delay: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-4xl text-white drop-shadow">
                  {subscribeContent.heading.title}
                </m.h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-auto justify-center">
            <m.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.5 },
              }}
              viewport={{ once: true }}
              className="flex relative w-auto max-w-xl mx-auto justify-center gap-5 items-center">
              <input
                required
                type="email"
                className="appearance-none bg-white py-4 px-7 w-auto lg:w-screen !pr-16 max-w-md shadow-md rounded-full outline outline-none"
                placeholder={subscribeContent.form.placeholder}
              />
              <m.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="appearance-none absolute top-1 right-1 bg-blue-300 text-white shadow-md w-12 h-12 rounded-full flex items-center justify-center">
                <BiSolidPaperPlane />
              </m.button>
            </m.form>
            <p className="w-auto max-w-md mx-auto mt-10 text-center text-white">
              {subscribeContent.heading.description}
            </p>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
