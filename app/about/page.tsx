import { Hero } from "@components/About/Hero";
import { Story } from "@components/About/Story";
import { Team } from "@components/About/Team";
import { WhyUs } from "@components/About/WhyUs";
import { Subscribe } from "@components/shared/Subscribe";
import { Testimonials } from "@components/Home/Testimonials";

export default function About({}) {
  return (
    <>
      <Hero classname="pt-52 pb-24 " />
      <Story classname="" />
      <WhyUs classname="pt-36" />
      <Testimonials classname="py-10 lg:py-20 " />
      <Team classname="py-10 lg:py-20 " />
      <Subscribe classname="pt-64 pb-10 -mt-48 lg:py-32 bg-blueDark" />
    </>
  );
}
