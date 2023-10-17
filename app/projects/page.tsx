import { CTA } from "@components/Projects/CTA";
import { Hero } from "@components/shared/Hero";
import Project from "@components/Projects/Project";

export default function Projects({}) {
  return (
    <>
      <Hero classname="pt-52 pb-24" title="Projects" subTitle="Our Projects" />
      <Project classname="pt-0 pb-52" itemsPerPage={4} />
      <CTA
        classname="py-20 bg-blueDark"
        cta_label="Get in touch"
        cta_link="contact/"
        title="Do you have project in mind?"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima voluptas quasi libero architecto modi voluptates. Omnis laborum nisi molestiae quis!"
      />
    </>
  );
}
