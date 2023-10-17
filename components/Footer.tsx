import { footerContent } from "@utils";
import Link from "next/link";
import { BiSolidHeart } from "react-icons/bi";

export function Footer({ classname }: { classname?: string }) {
  return (
    <footer className={`${classname}overflow-hidden h-full w-full relative`}>
      <div className="container px-5 md:px-10 mx-auto relative">
        <div className="md:flex">
          {/* Logo */}
          <div className="md:w-4/12 mb-10 md:mb-0">
            <Link href={"/"}>
              <span className="prevent-select text-2xl text-primary leading-none font-semibold font-aleo tracking-[2px]">
                D&rsquo;estate.
              </span>
            </Link>
          </div>
          {/*Footer Links*/}
          <div className="md:w-8/12">
            <div className="grid grid-cols-2 md:grid-cols-3 ">
              {footerContent.footerLinks.map((item) => (
                <div key={item.heading} className="mb-10 md:mb-0">
                  <h3 className="mb-3 font-semibold">{item.heading}</h3>
                  <ul>
                    {item.links.map((link) => (
                      <li key={link.label} className="mb-2">
                        <Link
                          href={link.href}
                          className={`${
                            link.badge ? "flex gap-2 items-center" : ""
                          } duration-300 transition-all ease-in-out`}>
                          {link.badge ? (
                            <>
                              <span>{link.label}</span>
                              <span className="py-0.5 px-2 rounded-full bg-blue-100 border border-blue-300 text-xs leading-none text-blue-400 font-semibold">
                                {link.badge}
                              </span>
                            </>
                          ) : (
                            link.label
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="pt-7 mt-7 md:pt-14 md:mt-14 border-t border-t-gray-100 text-center">
          <p className="flex items-center justify-center text-center mx-auto text-sm">
            &copy; <Link href="/"> D&rsquo;estate</Link>. All rights reserved.
            Made with <BiSolidHeart className="text-red-400" />
          </p>
        </div>
      </div>
    </footer>
  );
}
