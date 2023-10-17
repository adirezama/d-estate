"use client";
import Link from "next/link";
import Image from "next/image";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Project } from "@.contentlayer/generated";

export function PostCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
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
        <Link href={project.url} className="block overflow-hidden group">
          <Image
            src={project.image}
            alt={project.title}
            width={1064}
            height={644}
            className="object-cover object-center h-[400px] !max-w-full duration-300 transition-all ease-in-out group-hover:scale-[1.05]"
          />
        </Link>
        <div className="py-8 ">
          <span className="block mb-1 text-gray-500">{project.role}</span>
          <h3 className="mb-4">
            <Link href={project.url} className="text-2xl/none">
              {project.title}
            </Link>
          </h3>
        </div>
      </m.div>
    </LazyMotion>
  );
}
