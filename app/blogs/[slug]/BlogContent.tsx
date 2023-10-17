"use client";

import Image from "next/image";
import Link from "next/link";
import { allPosts } from "@.contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { getMDXComponent } from "next-contentlayer/hooks";
import { PostCard } from "@components/Blogs/PostCard";
import { Post } from "@.contentlayer/generated";

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function BlogContent({ blog }: { blog: Post | undefined }) {
  const blogs = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  let MDXContent;
  if (!blogs) return;
  if (!blog) {
    return <p>blog not found</p>;
  } else {
    MDXContent = getMDXComponent(blog.body.code);
  }
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: true }}
        className="pt-44 pb-20 lg:py-44 container px-5 md:px-10 mx-auto">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-slate-900 text-center text-4xl/none lg:text-6xl/none font-medium">
              {blog.title}
            </h1>
            <p className="text-slate-500 mt-10">
              <span className="inline-flex space-x-3">
                <span>{format(parseISO(blog.date), "LLL d, yyy")}</span>
                <span>&bull;</span>
                <span>{blog.author}</span>
              </span>
            </p>
          </div>
          <div className="mb-16">
            <Image
              src={blog.image}
              alt={blog.title}
              width={1065}
              height={644}
              className="object-cover object-top"
            />
          </div>
          <article className="prose mx-auto max-w-2xl">
            <div className="mx-auto max-w-2xl mb-10">
              <div className="flex justify-between">
                <div className="border-l border-gray-200 relative pl-3 before:content-[''] before:top-0 before:-left-[1px] before:absolute before:h-7 before:w-[1px] before:bg-blueDark">
                  <span className="block text-gray-400">Author</span>
                  <span>{blog.author}</span>
                </div>

                <div className="border-l border-gray-200 relative pl-3 before:content-[''] before:top-0 before:-left-[1px] before:absolute before:h-7 before:w-[1px] before:bg-blueDark">
                  <span className="block text-gray-400">Date</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
            <MDXContent />
          </article>
        </div>
        {/* More blogs */}
        <div className="max-w-4xl mx-auto mt-20 lg:mt-32">
          <h2 className="text-2xl text-gray-700 mb-10">More blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogs
              .filter((a) => blog.title !== a.title)
              .map((item, index) => {
                if (index > 2) return null;
                return <PostCard key={index} index={index} blog={item} />;
              })}
          </div>
          <div className="flex justify-center mt-10">
            <Link
              href="/blogs"
              className="transition-all duration-300 ease-in-out text-xs/none tracking-[2px] font-bold uppercase bg-blueDark py-4 px-5 text-white hover:bg-white hover:text-blueDark hover:shadow-2xl hover:border">
              View All blogs
            </Link>
          </div>
        </div>
      </m.div>
    </LazyMotion>
  );
}
