import { allPosts } from "@.contentlayer/generated";
import { Hero } from "@components/shared/Hero";
import { Post } from "@components/Blogs/Post";
import { Subscribe } from "@components/shared/Subscribe";

export default function page({ params }: any) {
  const newTitle = params.slug.replace("-", "");
  let itemsTotal = 0,
    items = null;

  if (params.slug) {
    items = allPosts.filter((post) =>
      post.categories.some(
        (category) =>
          category.title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "_")
            .replace(/^-+|-+$/g, "") === params.slug
      )
    );
    itemsTotal = items.length;
  }

  return (
    <>
      <Hero
        classname="pt-52 pb-24 capitalize"
        title={`${newTitle}(${itemsTotal})`}
        subTitle="Category"
      />
      <Post classname="pb-52" archive={true} params={params} itemsPerPage={6} />
      <Subscribe classname="py-16 lg:py-32 bg-blueDark" />
    </>
  );
}
