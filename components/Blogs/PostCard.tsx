"use client";
import Link from "next/link";
import Image from "next/image";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Post } from "@.contentlayer/generated";
import { format, parseISO } from "date-fns";

export function PostCard({ blog, index }: { blog: Post; index: number }) {
  return (
    <LazyMotion key={index} features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.05 * index, duration: 0.3 },
        }}
        className="relative overflow-hidden">
        <Link href={blog.url} className="block overflow-hidden group">
          <Image
            src={blog.image}
            alt={blog.title}
            width={1064}
            height={644}
            className="object-cover object-center h-[400px] !max-w-full duration-300 transition-all ease-in-out group-hover:scale-[1.05]"
          />
        </Link>
        <div className="p-8 ">
          <p className="block mb-1 text-gray-500">
            {format(parseISO(blog.date), "LLL d, yyyy")} {blog.author}
          </p>
          <h3 className="mb-4">
            <Link href={blog.url} className="text-2xl/none">
              {blog.title}
            </Link>
          </h3>
          <p>
            <Link
              href={blog.url}
              className="text-xs/none tracking-[2px] uppercase border-b-2 pb-2 inline-block border-blueDark">
              Read More
            </Link>
          </p>
        </div>
      </m.div>
    </LazyMotion>
  );
}
