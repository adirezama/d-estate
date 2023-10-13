"use client";
import { allPosts } from "@.contentlayer/generated";
import { recentBlogContent } from "@utils";
import { motion } from "framer-motion";
import { PostCard } from "../PostCard";
import { compareDesc } from "date-fns";

export function RecentBlog({ classname }: { classname?: string }) {
  const post = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <section className={classname}>
      <div className="container px-5 md:px-10 mx-auto">
        <div className="lg:flex justify-center mb-24">
          <div className="w-full lg:w-10/12 lg:flex items-center">
            <div className="lg:w-7/12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.05, duration: 0.5 },
                }}
                className="uppercase tracking-[3px] mb-5 inline-block">
                {recentBlogContent.subTitle}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1, duration: 0.5 },
                }}
                className="text-2xl lg:text-4xl mb-4 lg:mb-0">
                {recentBlogContent.title}
              </motion.h2>
            </div>
            <div className="lg:w-6/12 self-end text-sm">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.15, duration: 0.5 },
                }}>
                {recentBlogContent.description}
              </motion.p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full lg:w-10/12 mx-auto">
          {post.slice(0, 3).map((post, index) => (
            <PostCard key={index} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
