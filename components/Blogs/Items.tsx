import { Post } from "@.contentlayer/generated";
import { format, parseISO } from "date-fns";
import { m, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Items = ({ currentItems }: { currentItems: Post[] }) => {
  return (
    <>
      {currentItems.map((post, index) => (
        <LazyMotion key={index} features={domAnimation}>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.05, duration: 0.3 },
            }}
            className="relative overflow-hidden group">
            <Link href={post.url} className="overflow-hidden block relative">
              <Image
                src={post.image}
                alt="adirezama"
                width={1064}
                height={644}
                className="object-cover object-center h-[200px] duration-300 transition-all ease-in-out group-hover:scale-[1.05]"
              />
              <div className="py-8">
                <p className="block mb-3 uppercase text-xs tracking-[1px] text-gray-500">
                  {format(parseISO(post.date), "LLL d, yyyy")} {post.author}
                </p>
                <Link href={post.url}>
                  <h3 className="text-lg leading-none mb-4">{post.title}</h3>
                </Link>
                <Link href={post.url}>
                  <p className="text-xs/none tracking-[2px] uppercase border-b-2 pb-2 inline-block border-blueDark">
                    Read More
                  </p>
                </Link>
              </div>
            </Link>
          </m.div>
        </LazyMotion>
      ))}
    </>
  );
};
