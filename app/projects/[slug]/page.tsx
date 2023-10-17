import { allProjects } from "@.contentlayer/generated";
import { ProjectContent } from "./ProjectContent";

export async function generateStaticParams() {
  const projects = await allProjects;
  return projects.map((project) => {
    slug: project.url;
  });
}

export const generateMetadata = async ({ params }: any) => {
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === "projects/" + params.slug
  );
  return { title: project?.title };
};

export default function ProjectLayout({ params }: any) {
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === "projects/" + params.slug
  );
  return (
    <>
      <ProjectContent project={project} />
    </>
  );
}
