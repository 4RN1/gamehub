"use client";

import { SquarePen, UserRoundPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/lib/testData";
import SidebarLayout from "./SidebarLayout";

interface SocialLink {
  label: string;
  bg: string;
  icon: React.ReactNode;
  url: string;
}

interface UserStats {
  followers: number;
  following: number;
}

interface UserProfileInfo {
  bannerUrl: string;
  profileImageUrl: string;
  nickname: string;
  uniqueId: string;
  country: string;
  bio: string;
  stats: UserStats;
}

const accountCreated = true;

export default function UserProfile({
  bannerUrl,
  profileImageUrl,
  nickname,
  uniqueId,
  country,
  stats,
}: UserProfileInfo) {
  return (
    <section className="max-w-440 mx-auto lg:my-2 lg:rounded-md overflow-hidden">
      {accountCreated && (
        <div
          className="relative bg-cover bg-center h-70"
          style={{ backgroundImage: `url(${bannerUrl})` }}
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 flex items-end justify-between pb-5 px-2 h-full max-sm:flex-col max-sm:justify-end max-sm:items-start max-sm:gap-2">
            {/* Left side */}
            <div className="flex items-end  gap-4 lg:relative lg:left-10 max-sm:mb-4">
              <div className="w-27 h-27 md:w-32 md:h-32 overflow-hidden ring-2 ring-white/40 shrink-0 relative lg:rounded-xl rounded-xl">
                <Image
                  src={profileImageUrl}
                  alt="Profile image"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-1">
                <h2 className="text-white text-base md:text-xl font-bold leading-none">
                  {nickname}
                </h2>

                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-white/60 text-sm">{uniqueId}</span>
                  <span className="text-white/60">·</span>
                  <span className="text-white/60 text-xs">{country}</span>
                </div>

                <button className="bg-[#ffb84c] text-black font-semibold tracking-tight px-4 py-1  flex items-center justify-center gap-1 rounded-md hover:opacity-90 cursor-pointer text-sm">
                  <UserRoundPlus size={18} /> გამოწერა
                </button>
              </div>
            </div>

            {/* Right side */}
            <div className="flex flex-row max-sm:w-full  items-center max-sm:justify-between   max-sm:gap-1 md:gap-10">
              
              <div className="flex items-center justify-end md:gap-2 max-sm:gap-1.5 flex-wrap ">
                {socialLinks.map((s) => (
                  <Link
                    key={s.label}
                    href={s.url}
                    target="_parent"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`${s.bg} w-7 h-7 rounded-md flex items-center justify-center text-white hover:opacity-75 transition-opacity `}
                  >
                    {s.icon}
                  </Link>
                ))}
              </div>


               <div className="flex items-center gap-2 ">
              <div className="flex gap-4">
               
                <div className="flex items-center gap-1.5 text-sm">
                  Followers
                  <span className="text-white font-semibold">
                    {stats.followers}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-sm">
                  Following
                  <span className="text-white font-semibold">
                    {stats.following}
                  </span>
                </div>
              </div>

             
</div>
               <button className="bg-[#454369] py-1.5 px-3 absolute top-5 right-5 rounded-md border border-white/30 hover:opacity-90 cursor-pointer flex items-center gap-2 text-sm">
                <SquarePen size={20} /> 
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
