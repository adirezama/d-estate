import { Post } from "@components/Blogs/Post";
import { Subscribe } from "@components/shared/Subscribe";
import { Hero } from "@components/shared/Hero";
export default function Blogs({ params }: any) {
  return (
    <>
      <Hero
        classname="pt-52 pb-24"
        title="Recent Updates"
        subTitle="Our Blog"
      />
      <Post classname="pb-52" itemsPerPage={20} params={params} />
      <Subscribe classname="py-16 lg:py-20 bg-blueDark" />
    </>
  );
}
