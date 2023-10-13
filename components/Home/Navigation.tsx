"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { XMarkIcon, Bars4Icon } from "@heroicons/react/24/outline";
import { navMenu } from "@utils";
import { useEffect, useState } from "react";
import { AnimatePresence, m, domAnimation, LazyMotion } from "framer-motion";

export function Navigation({}) {
  const [active, setActive] = useState(false);
  const sideNav =
    "md:hidden fixed top-0 right-0 z-10 h-full w-[55%] sm:w-[35%] py-32 flex backdrop-blur bg-blue-300 ";

  const pathName = usePathname();
  const currentPath = (href: string) => {
    if (pathName === href) {
      return "text-[#1B55AF]";
    } else {
      return "text-white ";
    }
  };

  // Logic to close the mobile menu when the screen size is greater than 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setActive(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <header
        role="banner"
        className="fixed top-0 w-full z-[5] border-b border-black px-5 md:px-10 bg-blue-300">
        <div className="flex items-center justify-between mx-auto py-3 md:py-5">
          <Link href={"/"}>
            <span className="prevent-select text-2xl text-white drop-shadow leading-none font-bold font-aleo tracking-[2px]">
              D&rsquo;estate.
            </span>
          </Link>
          <div className="flex">
            <ul role="list" className="hidden md:flex gap-5 ">
              {navMenu.map((menu) => (
                <li key={menu.href}>
                  <Link
                    href={menu.href}
                    className={`relative before:content-[' '] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-blue-400 before:origin-[100%,50%] before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 hover:before:origin-[100%, 0%] hover:before:scale-x-[1] text-sm tracking-[2px] uppercase font-nunito font-medium pb-2 ${currentPath(
                      menu.href
                    )}`}>
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Nav menu Icon */}
          <div
            className="prevent-select md:hidden cursor-pointer text-lg leading-none font-manrope font-semibold flex items-center justify-center w-10 h-10 bg-white border border-gray-500 hover:bg-gray-50 hover:shadow-lg rounded-full z-[11]"
            onClick={() => setActive((prev) => !prev)}>
            {active ? (
              <XMarkIcon className="prevent-select w-5 h-5" />
            ) : (
              <Bars4Icon className="prevent-select w-5 h-5" />
            )}
          </div>
        </div>
        {/* Backdrop */}
        {active && (
          <div
            onClick={() => setActive((prev) => !prev)}
            className={`md:hidden fixed inset-0 bg-black bg-opacity-10`}
          />
        )}
        {/* Mobile Menu */}

        <LazyMotion features={domAnimation} strict>
          <AnimatePresence mode="wait">
            {active && (
              <m.div
                animate={{
                  x: "0%",
                  transition: {
                    duration: 0.5,
                    ease: [0.76, 0, 0.24, 1],
                  },
                }}
                exit={{
                  x: "100%",
                  transition: {
                    delay: 0.2,
                    duration: 0.5,
                    ease: [0.76, 0, 0.24, 1],
                  },
                }}
                initial={{ x: "100%" }}
                className={`prevent-select  ${sideNav}`}>
                <ul className="flex flex-col gap-5 relative text-gray-800 w-full text-lg leading-none font-manrope font-semibold uppercase">
                  {navMenu.map((menu, index) => (
                    <m.li
                      animate={{
                        x: "0%",
                        transition: {
                          delay: 0.05 * index,
                          duration: 0.5,
                          ease: [0.76, 0, 0.24, 1],
                        },
                      }}
                      exit={{
                        x: "100%",
                        transition: {
                          delay: 0.05 * index,
                          duration: 0.5,
                          ease: [0.76, 0, 0.24, 1],
                        },
                      }}
                      initial={{ x: "100%" }}
                      key={menu.href}
                      className="cursor-pointer">
                      <Link
                        href={menu.href}
                        className={`block p-5 px-8 hover:bg-blue-200 ${currentPath(
                          menu.href
                        )}`}
                        onClick={() => setActive((prev) => !prev)}>
                        {menu.label}
                      </Link>
                    </m.li>
                  ))}
                </ul>
              </m.div>
            )}
          </AnimatePresence>
        </LazyMotion>
      </header>
    </>
  );
}
