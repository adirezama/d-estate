"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { XMarkIcon, Bars4Icon } from "@heroicons/react/24/outline";
import { navMenu } from "@utils";
import { useEffect, useState } from "react";

export function Navigation({}) {
  const [active, setActive] = useState(false);
  const sideNav =
    "fixed translate-x-[100%] transition-all duration-700 ease-in-out opacity-0";
  const sideNavActive =
    "fixed  transition-all duration-700 ease-in-out opacity-100";

  const pathName = usePathname();
  const router = useRouter();
  const currentPath = (href: string) => {
    if (pathName === href) {
      return "text-blue-400";
    } else {
      return "";
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
        className="fixed top-0 py-3 md:py-5 w-full z-[5] border-b px-5 md:px-10 bg-background">
        <div className="flex items-center justify-between  mx-auto">
          <Link href={"/"}>
            <span className="text-2xl text-primary leading-none font-bold font-aleo tracking-[2px]">
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
            className=" md:hidden cursor-pointer text-lg leading-none font-manrope font-semibold flex items-center justify-center w-10 h-10 bg-white border border-gray-500 hover:bg-gray-50 hover:shadow-lg rounded-full z-[6]"
            onClick={() => setActive((prev) => !prev)}>
            {active ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars4Icon className="w-5 h-5" />
            )}
          </div>
        </div>
        {/* Backdrop */}
        {active && (
          <div
            onClick={() => setActive((prev) => !prev)}
            className={`md:hidden fixed inset-0 bg-black bg-opacity-10 transition-all duration-100 ease-in-out translate-x-[0%]`}
          />
        )}
        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 z-[4] h-full w-[55%] py-32 flex backdrop-blur bg-background ${
            active ? sideNavActive : sideNav
          }`}>
          <ul className="flex flex-col gap-5 relative text-gray-800 w-full text-lg leading-none font-manrope font-semibold uppercase">
            {navMenu.map((menu) => (
              <li key={menu.href} className="cursor-pointer">
                <Link
                  href={menu.href}
                  className={`block p-5 px-8 hover:bg-blue-200 ${currentPath(
                    menu.href
                  )}`}
                  onClick={() => setActive((prev) => !prev)}>
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
