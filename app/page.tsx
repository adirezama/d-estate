import { About } from "@components/About";
import { Hero } from "@components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero classname="py-10 bg-background" />
      <About classname="py-10 lg:py-16" />
    </>
  );
}
