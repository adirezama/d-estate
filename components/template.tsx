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

<>
  {/* Flex Option */}
  <div className="flex justify-between gap-3">
    <div className="basis-1/2 bg-gray-300 h-96"></div>
    <div className="flex flex-col basis-1/2 gap-3 h-96">
      <div className="basis-1/2 bg-gray-300"></div>
      <div className="flex basis-1/2 gap-3">
        <div className="basis-1/2 bg-gray-300"></div>
        <div className="basis-1/2 bg-gray-300"></div>
      </div>
    </div>
  </div>
  ;{/* Grid Option */}
  <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
    <Card className="row-span-2 col-span-2" />
    <Card className="row-span-1 col-span-2" />
    <Card className="row-span-1 col-span-1" />
    <Card className="row-span-1 col-span-1" />
  </div>
  ;
</>;
