import { About } from "@components/Home/About";
import { Footer } from "@components/Footer";
import { Hero } from "@components/Home/Hero";
import { HowItWorks } from "@components/Home/HowItWorks";
import { RecentBlog } from "@components/Home/RecentBlog";
import { Services } from "@components/Home/Services";
import { Subscribe } from "@components/Home/Subscribe";
import { Testimonials } from "@components/Home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero classname="py-10" />
      <About classname="py-10" />
      <Services classname="py-10 lg:py-16" />
      <HowItWorks classname="py-10 lg:py-32 !pt-32" />
      <Testimonials classname="py-10 lg:py-32 " />
      <RecentBlog classname="py-10 lg:py32" />
      <Subscribe classname="pt-64 pb-10 -mt-48 lg:py-32 bg-blueDark" />
      <Footer classname="bg-white py-10 md:py-24" />
    </>
  );
}
