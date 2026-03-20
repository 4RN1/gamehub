import { latestArticles } from '@/lib/testData';
import Image from 'next/image';
import React from 'react'
import SidebarLayout from './SidebarLayout';
import { Ellipsis } from 'lucide-react';


type filter = "action" |  "role-playing" |  "strategy" | " shooters" | " simulator" | "sports/racing" | "multiplayer/coop" | "your posts" | "favorites" | "all" | "tech" | "games";





interface NewsLayout {
  sectionTitle:string,
  filters:filter[];
}




const Newslayout = ( {sectionTitle, filters } : NewsLayout) => {
  return (
   <div className="min-h-screen  text-white font-sans max-w-325 mx-auto">
      <div className="py-5">
        <div className="flex gap-8">
 
          {/* ── Main Content ── */}
          <div className="flex-1">
 
            {/* Section Title */}
       <h2 className="text-2xl font-extrabold uppercase tracking-widest mb-5">
              {sectionTitle}
            </h2>
 
            {/* Filter Tabs */}
               <div className="flex gap-2 mb-6 flex-wrap">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors ${
                    filter === "all"
                      ? "bg-orange-500 text-white"
                      : "bg-[#2e2e2e] text-gray-300 hover:bg-[#3a3a3a]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
 
            {/* Article List */}
            <div className="flex flex-col gap-6 ">
              {latestArticles.map((article) => (
                <article
                  key={article.id}
                  className="flex gap-5 cursor-pointer group"
                >
                  {/* Thumbnail */}
                  <div className="relative w-52 h-36 shrink-0 overflow-hidden rounded">
                    <div className="w-full h-full bg-[#2e2e2e] rounded" />
                    
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                   
                  </div>
 
                  {/* Text */}
                  <div className="flex flex-col justify-center gap-2">
                    <span className="text-gray-400 text-xs">{article.timeAgo}</span>
 
                    <h3 className="text-lg font-extrabold leading-snug group-hover:text-orange-400 transition-colors">
                      {article.title}
                    </h3>
 
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
 
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-400">
                        By{" "}
                        <span className="font-semibold text-white">
                          {article.author}
                        </span>
                      </span>
                      {/* Comment icon placeholder */}
                      <span className="text-gray-500 text-xs">|</span>
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>

         

      </div>
       <span className='flex justify-center transition-all '><Ellipsis size={60} className='bg-gray-700 ring ring-white/20 hover:opacity-95 hover:scale-105 duration-75 cursor-pointer rounded-2xl w-25 my-10'/> </span>
    </div>
  )
}

export default Newslayout
