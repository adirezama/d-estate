import { allPosts } from "@.contentlayer/generated";
import { BlogContent } from "./BlogContent";

export async function generateStaticParams() {
  const blogs = await allPosts;
  return blogs.map((project) => {
    slug: project.url;
  });
}

export const generateMetadata = async ({ params }: any) => {
  const project = allPosts.find(
    (project) => project._raw.flattenedPath === "blogs/" + params.slug
  );
  return { title: project?.title };
};

export default function BlogLayout({ params }: any) {
  const blog = allPosts.find(
    (blog) => blog._raw.flattenedPath === "blogs/" + params.slug
  );
  return (
    <>
      <BlogContent blog={blog} />
    </>
  );
}
