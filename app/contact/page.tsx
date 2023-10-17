import { ContactForm } from "@components/ContactForm";
import { Hero } from "@components/shared/Hero";

export default function Contact({}) {
  return (
    <>
      <Hero classname="pt-32 pb-20" title="Contact" subTitle="Get in touch" />
      <ContactForm classname="pb-10" />
    </>
  );
}
