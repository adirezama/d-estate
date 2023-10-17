import {
  BiHardHat,
  BiPaintRoll,
  BiNote,
  BiBulb,
  BiLayer,
  BiOutline,
  BiArch,
  BiSolidUser,
} from "react-icons/bi";
import img1 from "/public/images/img-square-1-min.jpg";
import img2 from "/public/images/img-square-2-min.jpg";
import img3 from "/public/images/img-square-3-min.jpg";
import img4 from "/public/images/img-square-4-min.jpg";
import img5 from "/public/images/img-square-5-min.jpg";
import post1 from "/public/images/post-1-min.jpg";
import post2 from "/public/images/post-2-min.jpg";
import post3 from "/public/images/post-3-min.jpg";
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

export const testimonialsContent = {
  heading: {
    title: "What Our Customers Say",
    subTitle: "Testimonials",
    description:
      "We are a team of professionals who are dedicated to providing you with the best services possible. ",
  },
  testimonials: [
    {
      name: "Fadhilah Mark",
      img: "/testi.jpg",
      title: "Homeowner",
      role: "Customer",
      quote:
        "Working with D-Estate was an amazing experience. They turned our dream home into a reality. Their attention to detail is exceptional.",
    },
    {
      name: "Alice Johnson",
      img: "/testi-2.jpg",
      title: "Real Estate Agent",
      role: "Customer",
      quote:
        "I've recommended D-Estate to numerous clients, and they have never disappointed. Their homes are of the highest quality.",
    },
    {
      name: "Robert Davis",
      img: "/testi-3.jpg",
      title: "Architect",
      role: "Customer",
      quote:
        "D-Estate's collaboration with architects is seamless. Their commitment to architectural vision is impressive.",
    },
    {
      name: "Sara White",
      img: "/testi-4.jpg",
      title: "Interior Designer",
      role: "Customer",
      quote:
        "I've had the privilege of working on D-Estate projects, and their commitment to design excellence is truly remarkable.",
    },
    {
      name: "Michael Brown",
      img: "/testi-5.jpg",
      title: "Homeowner",
      role: "Customer",
      quote:
        "D-Estate's designs are a perfect blend of aesthetics and functionality. We love our D-Estate-built home.",
    },
    {
      name: "Emily Clark",
      img: "/testi-6.jpg",
      title: "Construction Manager",
      role: "Customer",
      quote:
        "I've managed construction projects with D-Estate, and their professionalism and quality are unparalleled.",
    },
    {
      name: "David Hall",
      img: "/testi-7.jpg",
      title: "Homeowner",
      role: "Customer",
      quote:
        "D-Estate not only built our home but also made the process stress-free and enjoyable. We are extremely satisfied.",
    },
    {
      name: "Jennifer Lee",
      img: "/testi-8.jpg",
      title: "Homebuyer",
      role: "Customer",
      quote:
        "D-Estate's homes stand out in the market. Their attention to customer preferences makes them a top choice.",
    },
    {
      name: "William Smithson",
      img: "/testi-9.jpg",
      title: "Investor",
      role: "Customer",
      quote:
        "Investing in D-Estate properties has been a wise decision. Their homes have consistently shown value appreciation.",
    },
    {
      name: "Sophia Martinez",
      img: "/testi-10.jpg",
      title: "Homeowner",
      role: "Customer",
      quote:
        "D-Estate's homes are not just structures; they are expressions of art. We are proud to call their work our home.",
    },
  ],
};

export const recentBlogContent = {
  title: "Recent Updates",
  description:
    "Explore the latest insights and innovations in architectural design and construction. Discover how the built environment is evolving, and gain valuable knowledge to inspire your next architectural project.",
  subTitle: "Our blog ",
};

export const subscribeContent = {
  heading: {
    title: "Never Miss an Update, Subscribe Today",
    subTitle: "Join our Community",
    description:
      "Join our community of subscribers today and stay connected with all exciting developments!",
  },
  form: {
    placeholder: "Enter your Email",
  },
};

export const footerContent = {
  footerLinks: [
    {
      heading: "Product",
      links: [
        { href: "#", label: "Overview" },
        { href: "#", label: "Solution", badge: "New" },
        { href: "#", label: "Tutorials" },
        { href: "#", label: "Pricing" },
        { href: "#", label: "Releases" },
      ],
    },
    {
      heading: "Company",
      links: [
        { href: "#", label: "About Us" },
        { href: "#", label: "Leadership" },
        { href: "#", label: "Careers", badge: "We're hiring" },
        { href: "#", label: "Press" },
        { href: "#", label: "Contact" },
        { href: "#", label: "Branding" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { href: "#", label: "Blog" },
        { href: "#", label: "Events" },
        { href: "#", label: "Newsletter" },
        { href: "#", label: "Knowledge base" },
        { href: "#", label: "Support" },
        { href: "#", label: "Tutorials" },
      ],
    },
  ],
};

export const aboutHeroContent = {
  heading: {
    title: "Blueprinting Tomorrow's Landscape Today",
    subTitle: "About Us",
  },
};

export const storyContent = {
  column1: {
    imgs: [
      {
        img: img5,
        alt: "Team Brainstorming",
        width: 1180,
        height: 413,
        tailwindClass: "h-56 lg:h-96",
      },
      { img: img1, alt: "Woman makin a plan", width: 1180, height: 413 },
    ],
  },
  column2: {
    imgs: [
      {
        img: img2,
        alt: "Team Meeting",
        width: 1180,
        height1: 413,
        tailwindClass: "h-56 lg:h-64",
      },
      {
        img: post2,
        alt: "White curvy building",
        width: 1180,
        height: 413,
        tailwindClass: "h-56 lg:h-64",
      },
      {
        img: img4,
        alt: "Woman makin a plan",
        width: 1180,
        height: 413,
        tailwindClass: "h-56 lg:h-96",
      },
    ],
  },
  column3: {
    imgs: [
      {
        img: post1,
        alt: "Building",
        width: 1180,
        height1: 413,
      },
      {
        img: img3,
        alt: "Man writing a plan",
        width: 1180,
        height: 413,
      },
    ],
  },
  storyText: {
    heading: "Crafting Spaces, Shaping Dreams",
    p1: "Envisioned by a group of passionate architechs, D-Estate is a leading real estate company that has been crafting spaces for over 20 years. We are committed to delivering excellence in architectural design and construction.",
    p2: "Our journey began in 1999, when we built our first home. Since then, we have grown into a full-service real estate company, with a team of over 100 professionals. We have built over 1000 homes, and have won numerous awards for our work.",
    signature: "/Bill_Smith_Signature.svg",
    name: "Bill Smith",
    roleTitle: "CEO and Co-Founder",
  },
};

export const whyUsContent = {
  heading: {
    title: "Blueprinting Tomorrow's Landscape Today",
    subTitle: "Why Us",
  },
  whyUsItems: [
    {
      icon: BiHardHat,
      title: "Unparalled Expertise",
      description:
        "with over 20 years of experience, we have the expertise to deliver the best results.",
    },
    {
      icon: BiArch,
      title: "Innovative Design",
      description:
        "Our Portfolio is a testament to our commitment to design excellence.",
    },
    {
      icon: BiSolidUser,
      title: "Client-centered Approach",
      description:
        "We are committed to delivering the highest level of customer satisfaction.",
    },
  ],
};

export const teamContent = {
  heading: {
    title: "Introducing Our Exceptional Team",
    subTitle: "Meet our Team",
    description:
      "D-estate we're dedicated to shaping environments that trancend mere structuring, weaving in the essence of life and living. ",
  },
  team: [
    {
      image: "/testi-8.jpg",
      name: "Jane Cooper",
      role: "Principal Architect",
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
    {
      image: "/testi-1.jpg",
      name: "Alexa Richardson",
      role: "Design Architect",
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
    {
      image: "/testi-2.jpg",
      name: "James Mayer",
      role: "Landscape Architect",
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
    {
      image: "/testi-3.jpg",
      name: "Rober Fox",
      role: "Landscape Architect",
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
    {
      image: "/testi-4.jpg",
      name: "Sarah Smith",
      role: "Landscape Architect",
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
    {
      image: "/testi-5.jpg",
      name: "William Jones",
      role: "Lead Architect",
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
    {
      image: "/testi-6.jpg",
      name: "William Jones",
      role: "Construction Manager",
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
  ],
};
