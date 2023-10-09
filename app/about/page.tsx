import Link from "next/link";

function Card({ className }: { className?: string }) {
  return (
    <Link
      href={"/"}
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}>
      <div className="z-[3] relative w-full h-full">image</div>
      <div className="absolute z-[1] top-0 left-0 w-full h-full bg-blue-300" />
      <div className="absolute z-[2] bottom-0 left-0 p-3 ">
        <h4 className="inline-block px-5 py-1 font-semibold bg-orange-300">
          post category
        </h4>
        <div className="mt-2">post title</div>
      </div>
    </Link>
  );
}

export default function About({}) {
  return (
    <div className="py-20 px-5 md:px-15 bg-background">
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
        <Card className="row-span-2 col-span-2" />
        <Card className="row-span-1 col-span-2" />
        <Card className="row-span-1 col-span-1" />
        <Card className="row-span-1 col-span-1" />
      </div>
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
        <Card className="row-span-2 col-span-2" />
        <Card className="row-span-1 col-span-2" />
        <Card className="row-span-1 col-span-1" />
        <Card className="row-span-1 col-span-1" />
      </div>
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
        <Card className="row-span-2 col-span-2" />
        <Card className="row-span-1 col-span-2" />
        <Card className="row-span-1 col-span-1" />
        <Card className="row-span-1 col-span-1" />
      </div>
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
        <Card className="row-span-2 col-span-2" />
        <Card className="row-span-1 col-span-2" />
        <Card className="row-span-1 col-span-1" />
        <Card className="row-span-1 col-span-1" />
      </div>
    </div>
  );
}
