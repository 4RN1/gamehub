"use client";
import { Dot, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SidebarLayout from "./SidebarLayout";

interface thread {
  user: string;
  userImg: string;
  createdDate: string;
  slug: string;
  threadTitle: string;
  threadText: string;
  threadViews: number;
}

const ForumPosts = (params: thread) => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <section className="mx-5 flex justify-around gap-5 mt-10 max-sm:flex-col"> 
        <div>
      <h2 className="text-2xl max-w-280 font-medium ">აქტივობა</h2>

      <div className="flex gap-4 items-center mt-3">
        <button
          onClick={() => setActiveTab("posts")}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer  ${
            activeTab === "posts"
              ? "bg-orange-500 text-white hover:bg-orange-400"
              : "bg-[#2e2e2e] text-gray-300 hover:bg-[#3a3a3a]"
          }`}
        >
          შენი პოსტები
        </button>
        <button
          onClick={() => setActiveTab("favorites")}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer  ${
            activeTab === "favorites"
              ? "bg-orange-500 text-white hover:bg-orange-400"
              : "bg-[#2e2e2e] text-gray-300 hover:bg-[#3a3a3a]"
          }`}
        >
          ფავორიტები
        </button>
      </div>

      {/* POSTS */}
      <div className="max-w-300  my-5 border-y border-y-white/10 py-5 hover:bg-white/3 px-2 ">
        <Link href={params.slug} className="hover:bg-white/50 ">
          {/* profile id name , posted date */}
          <div className="relative flex items-center justify-between ">
            <div className="flex items-center">
              <div className="object-cover relative h-8 w-8 mr-1">
                <Image
                  src={params.userImg}
                  alt={params.user}
                  fill
                  className="object-cover rounded-full "
                />
              </div>
              <p className="text-sm">{params.user}</p>
              <Dot />
              <p className="text-sm">{params.createdDate}</p>
            </div>
          </div>

          <h3 className="my-2">{params.threadTitle}</h3>
          <p>{params.threadText}</p>

          <p className="flex gap-1 mt-5 items-center text-sm">
            <Eye size={20} />
            <span className="text-md">{params.threadViews} </span>
          </p>
        </Link>
      </div>
</div>
    <SidebarLayout/>


    </section>
  );
};

export default ForumPosts;
