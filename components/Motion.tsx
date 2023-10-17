"use client";
import { button } from "@utils/Anim";
import { Button } from "./Button";
import { m, domAnimation, LazyMotion } from "framer-motion";
import React from "react";

export function Motion({}) {
  const Motion = m(Button);
  return (
    <LazyMotion features={domAnimation}>
      <Motion
        variants={button}
        whileHover={"whileHover"}
        animate="animate"
        whileTap="whileTap"
        classname="py-4 px-12 text-xl leading-6 font-medium bg-[#fcdf51] border-2 border-solid border-black rounded-lg"
        label="Get Started"
        href="#"
      />
    </LazyMotion>
  );
}
