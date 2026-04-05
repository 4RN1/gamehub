"use client";

import { latestArticles } from "@/lib/testData";
import Image from "next/image";
import { Ellipsis } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";

interface Article {
  id: number;
  slug: string;
  image_url: string;
  title: string;
  tags: string[];
  short_desc: string;
  post_content: string;
  category: string;
  created_at: string;
}

interface NewsLayout {
  sectionTitle: string;
  database?: Article[];
}

const Newslayout = ({ sectionTitle, database }: NewsLayout) => {
  const [filterByCategory, setFilterByCategory] = useState("all");

  return (
    <div className="min-h-screen  text-white font-sans max-w-440 mx-auto max-sm:px-5">
      <div className="py-5">
        <div className="flex gap-8 max-lg:flex-col">
          {/* ── Main Content ── */}
          <div className="flex-1">
            {/* Section Title */}
            <h2 className="text-2xl font-extrabold uppercase tracking-widest mb-5 max-sm:text-center">
              {sectionTitle}
            </h2>

            {/* Filter Tabs */}
            {/* <div className="flex gap-2 mb-6 flex-wrap max-sm:justify-center">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={()=> setFilterByCategory(filter)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer  ${
                    filterByCategory === filter
                      ? "bg-orange-500 text-white hover:bg-orange-400"
                      : "bg-[#2e2e2e] text-gray-300 hover:bg-[#3a3a3a]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div> */}

            {/* Article List */}
            <div className="flex flex-col gap-6 max-w-275">
              {(!database || database?.length === 0) && (
                <p className="text-gray-400 text-center py-20">
                  სიახლეები არ არის
                </p>
              )}

              {database?.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug}`}
                  className="flex gap-5 cursor-pointer group max-sm:flex-col max-sm:items-center max-sm:mb-5"
                >
                  {/* Thumbnail */}
                  <div className="relative w-79 h-55 shrink-0 overflow-hidden rounded ">
                    <div className="w-full h-full bg-[#2e2e2e] rounded " />

                    <Image
                      src={
                        article.image_url
                          ? article.image_url
                          : "/assets/LOGO.png"
                      }
                      alt={article.title}
                      fill
                      sizes="width:100%"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-center gap-2 max-sm:items-center">
                    <p className="flex gap-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-orange-500 text-sm text-black font-medium px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </p>
                    <h3 className="text-2xl font-extrabold leading-snug group-hover:text-orange-400 transition-colors max-sm:text-center">
                      {article.title}
                    </h3>
                    <span className="text-gray-400 text-sm">
                      {formatDate(article.created_at)}
                    </span>

                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 max-sm:text-center max-w-170">
                      {article.short_desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <span className="flex justify-center transition-all ">
              <Ellipsis
                size={60}
                className="bg-gray-700 ring ring-white/20 hover:opacity-95 hover:scale-105 duration-75 cursor-pointer rounded-2xl w-25 my-10"
              />{" "}
            </span>
          </div>

          {/* AD CONTAINERS */}
          <div className="lg:w-fit flex flex-col items-center gap-10 max-lg:hidden">
            <div className="sticky top-20 w-60 h-150">
              <Link href="#">
                <Image src="/assets/ad.png" alt="ad" fill objectFit="cover" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newslayout;
