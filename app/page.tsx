import { About } from "@components/About";
import { Hero } from "@components/Hero";
import { HowItWorks } from "@components/HowItWorks";
import { Services } from "@components/Services";

export default function Home() {
  return (
    <>
      <Hero classname="py-10 bg-background" />
      <About classname="py-16" />
      <Services classname="py-10 lg:py-16 bg-background" />
      <HowItWorks classname="py-16 lg:py-32 !pt-32" />
    </>
  );
}
