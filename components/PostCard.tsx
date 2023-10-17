"use client";
import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Post } from "@.contentlayer/generated";
import { motion } from "framer-motion";
type PostCardProps = {
  post: Post;
  index: number;
};

export function PostCard({ post, index }: PostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.05 * index, duration: 0.5 },
      }}
      viewport={{ once: true }}
      className="bg-white overflow-hidden relative shadow-lg group">
      <Link
        aria-label={`read more about ${post.title}`}
        href={post.url}
        className="relative block overflow-hidden">
        <Image
          src={post.image}
          alt=""
          width={1064}
          height={644}
          className="object-cover object-center duration-300 transition-all ease-in-out group-hover:scale-[1.05]"
        />
      </Link>
      <div className="p-8">
        <p className="mb-3 uppercase text-xs tracking-[1px]">
          {format(parseISO(post.date), "LLL d, yyyy")} &bull; {post.author}
        </p>
        <h3 className="mb-4">
          <Link aria-label={`read more about ${post.title}`} href={post.url}>
            {post.title}
          </Link>
        </h3>
        <p>
          <Link
            aria-label={`${post.title}`}
            href={post.url}
            className="text-xs tracking-[2px] uppercase border-b-2 pb-2 inline-block border-blue-300">
            Read More
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
