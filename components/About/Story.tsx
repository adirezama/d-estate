"use client";
import { m, LazyMotion, domAnimation } from "framer-motion";

export function Story({ classname }: { classname?: string }) {
  return (
    <section className={classname}>
      <div className="container px-5 md:px-10 mx-auto"></div>
    </section>
  );
}
