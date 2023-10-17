"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project, allProjects } from "@.contentlayer/generated";
import { compareDesc } from "date-fns";
import ReactPaginate from "react-paginate";
import { m, LazyMotion, domAnimation } from "framer-motion";

const Items = ({ currentItems }: { currentItems: Project[] }) => {
  return (
    <>
      {currentItems.map((project, index) => (
        <LazyMotion key={index} features={domAnimation}>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.05, duration: 0.3 },
            }}
            className="relative overflow-hidden w-full lg:w-1/2 p-2 group">
            <Link href={project.url} className="overflow-hidden block relative">
              <Image
                src={project.image}
                alt="adirezama"
                width={1064}
                height={644}
                className="object-cover object-center h-[400px] !max-w-full duration-300 transition-all ease-in-out group-hover:scale-[1.05]"
              />
              <div className="py-8 px-2">
                <span className="block mb-1 text-gray-500">{project.role}</span>
                <Link href={project.url}>
                  <h3 className="text-2xl leading-none mb-4">
                    {project.title}
                  </h3>
                </Link>
              </div>
            </Link>
          </m.div>
        </LazyMotion>
      ))}
    </>
  );
};

export default function Project({
  classname,
  itemsPerPage,
}: {
  classname: string;
  itemsPerPage: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const items = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  const [currItems, setCurrItems] = useState<Project[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [clickPaginate, setClickPaginate] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const endOffset = itemOffset + itemsPerPage;
    setCurrItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
    if (clickPaginate === true) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [
    setCurrItems,
    setPageCount,
    setClickPaginate,
    itemOffset,
    itemsPerPage,
    clickPaginate,
    items,
  ]);

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * itemsPerPage) % items.length;
    setClickPaginate(true);
    setItemOffset(newOffset);
  };
  if (!items) return null;
  return (
    <section className={classname} ref={ref}>
      <div className="lg:w-10/12 mx-auto flex flex-wrap mb-10">
        <Items currentItems={currItems} />
      </div>
      <div className="lg:w-10/12 mx-auto flex flex-wrap">
        <ReactPaginate
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="Previous"
          pageClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-item"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </section>
  );
}
