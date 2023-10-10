import { HowItWorks } from "@components/HowItWorks";
import {
  BiHardHat,
  BiPaintRoll,
  BiNote,
  BiBulb,
  BiLayer,
  BiOutline,
} from "react-icons/bi";
export const navMenu = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const heroContent = {
  intro: {
    title: "We’re Here to Help You To Find Your Home",
    description:
      "Find various properties that suits your preference. Hassle free, forget all the preparation to find beautiful residents.",
  },
};

export const aboutContent = {
  image: {
    hero: {
      src: "/hero2.png",
      alt: "hero image",
    },
    dots: {
      src: "/dots-black.svg",
      alt: "Dots background image",
    },
  },
  title: "Our Reputation Is As Real As Our Properties",
  description:
    "We are professionals real estate agent, you will feel premium service from us and we have done it to all our customers.",
};

export const servicesContent = {
  offers: [
    {
      title: "Consultations",
      description:
        "Talk to us about anything that related to properties, whether you own or you want",
    },
    {
      title: "Marketing",
      description:
        "We can help you market you properties. Your properties will sold under a year",
    },
    {
      title: "Open House",
      description:
        "We Provide an Open House event to make our customers feel the warmth of the house",
    },
    {
      title: "Inspection",
      description:
        "We have professional home worker to do inspection and fixing on the properties",
    },
  ],
  headline: {
    title: "Come On, We Will Help You Find Your Truly Home",
    description:
      "See how we help our customers to make their dream comes thru. Maybe you can be our next customer.",
    images: [
      { src: "/hero1.png", alt: "Hero image" },
      { src: "/hero2.png", alt: "Hero image" },
    ],
  },
};

export const howItWorksContent = {
  heading: {
    title: "Where Creativity Meets Structural Integrity",
    subTitle: "How It Works",
    description:
      "We are a team of professionals who are dedicated to providing you with the best services possible. ",
  },
  steps: [
    {
      number: "01",
      icon: BiHardHat,
      title: "Project Initiation",
      description:
        "We will meet with you to discuss your project and provide a free estimate.",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
    {
      number: "02",
      icon: BiPaintRoll,
      title: "Conceptual Design",
      description:
        "We will work with you to create a design that meets your needs and budget.",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
    {
      number: "03",
      icon: BiNote,
      title: "Construction Documents",
      description:
        "We will provide you with a detailed set of construction documents for your project.",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
  ],
  features: [
    {
      icon: BiHardHat,
      title: "Design & Build",
      description:
        "We will meet with you to discuss your project and provide a free estimate.",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
    {
      icon: BiBulb,
      title: "Construction Management",
      description:
        "We will work with you to create a design that meets your needs and budget.",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
    {
      icon: BiOutline,
      title: "Post-Construction Services",
      description:
        "Covert your dream home into reality with our post construction services.",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
    {
      icon: BiLayer,
      title: "Interior Design",
      description:
        "Covert your dream home into reality with our post construction services.",
      btn: {
        href: "#",
        label: "Learn More",
      },
    },
  ],
};
