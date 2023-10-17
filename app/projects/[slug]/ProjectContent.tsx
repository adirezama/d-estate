"use client";

import Image from "next/image";
import Link from "next/link";
import { allProjects } from "@.contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { getMDXComponent } from "next-contentlayer/hooks";
import { Project } from "@.contentlayer/generated";
import { PostCard } from "@components/Projects/PostCard";

export function ProjectContent({ project }: { project: Project | undefined }) {
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  let MDXContent;
  if (!projects) return;
  if (!project) {
    return <p>Project not found</p>;
  } else {
    MDXContent = getMDXComponent(project.body.code);
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
              {project.title}
            </h1>
            <p className="text-slate-500 mt-10">
              <span className="inline-flex space-x-3">
                <span>{format(parseISO(project.date), "LLL d, yyy")}</span>
                <span>&bull;</span>
                <span>{project.role}</span>
              </span>
            </p>
          </div>
          <div className="mb-16">
            <Image
              src={project.image}
              alt={project.title}
              width={1065}
              height={644}
              className="object-cover object-top"
            />
          </div>
          <article className="prose mx-auto max-w-2xl">
            <div className="mx-auto max-w-2xl mb-10">
              <div className="flex justify-between">
                <div className="border-l border-gray-200 relative pl-3 before:content-[''] before:top-0 before:-left-[1px] before:absolute before:h-7 before:w-[1px] before:bg-blueDark">
                  <span className="block text-gray-400">Client</span>
                  <span>{project.client}</span>
                </div>

                <div className="border-l border-gray-200 relative pl-3 before:content-[''] before:top-0 before:-left-[1px] before:absolute before:h-7 before:w-[1px] before:bg-blueDark">
                  <span className="block text-gray-400">Year</span>
                  <span>{project.year}</span>
                </div>

                <div className="border-l border-gray-200 relative pl-3 before:content-[''] before:top-0 before:-left-[1px] before:absolute before:h-7 before:w-[1px] before:bg-blueDark">
                  <span className="block text-gray-400">Role</span>
                  <span>{project.role}</span>
                </div>
              </div>
            </div>
            <MDXContent />
          </article>
        </div>
        {/* More Projects */}
        <div className="max-w-4xl mx-auto mt-20 lg:mt-32">
          <h2 className="text-2xl text-gray-700 mb-10">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects
              .filter((a) => project.title !== a.title)
              .map((item, index) => {
                if (index > 2) return null;
                return <PostCard key={index} index={index} project={item} />;
              })}
          </div>
          <div className="flex justify-center mt-10">
            <Link
              href="/projects"
              className="transition-all duration-300 ease-in-out text-xs/none tracking-[2px] font-bold uppercase bg-blueDark py-4 px-5 text-white hover:bg-white hover:text-blueDark hover:shadow-2xl hover:border">
              View All Projects
            </Link>
          </div>
        </div>
      </m.div>
    </LazyMotion>
  );
}
