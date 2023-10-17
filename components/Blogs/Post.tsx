"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Post, allPosts } from "@.contentlayer/generated";
import ReactPaginate from "react-paginate";
import { compareDesc } from "date-fns";
import { Items } from "./Items";

type PostType = {
  classname?: string;
  itemsPerPage: number;
  params: any;
  archive?: boolean;
};

export function Post({
  classname,
  itemsPerPage,
  params,
  archive = false,
}: PostType) {
  const ref = useRef<HTMLElement>(null);
  const [currItems, setCurrItems] = useState<Post[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [clickPaginate, setClickPaginate] = useState(false);

  let items = allPosts;
  if (!archive === false) {
    items = allPosts.sort((a, b) =>
      compareDesc(new Date(a.date), new Date(b.date))
    );
  } else {
    if (params?.slug) {
      items = allPosts.filter((post) =>
        post.categories.some(
          (category) =>
            category.title
              .toLowerCase()
              .trim()
              .replace(/[^\w\s-]/g, "")
              .replace(/[s\_-]+/g, "")
              .replace(/^-+|-+$/g, "") === params.slug
        )
      );
    }
  }

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
    items,
    itemsPerPage,
    clickPaginate,
  ]);

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * itemsPerPage) % items.length;
    setClickPaginate(true);
    setItemOffset(newOffset);
  };

  return (
    <section className={classname} ref={ref}>
      <div className="container px-5 md:px-10 mx-auto">
        <div className="lg:w-10/12 mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
      </div>
    </section>
  );
}
