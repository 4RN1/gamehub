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
  bio,
}: UserProfileInfo) {
  return (
    <section className="max-w-325 mx-auto lg:my-2 lg:rounded-md  overflow-hidden  ">
      {/* ── Banner with overlaid content ── */}
      {accountCreated && (
        <div
  className="relative bg-cover bg-center h-70"
  style={{ backgroundImage: `url(${bannerUrl})` }}
>
          {/* Gradient scrim — strong left, fades right */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Row: avatar + info on left, stats + button on right */}
          <div className="relative z-10 flex items-end justify-between  pb-5 px-5 h-full">
            {/* Left side */}
            <div className="flex items-end gap-4 relative left-10 ">
              <div className="  w-20 h-20 md:w-32 md:h-32  overflow-hidden ring-2 ring-white/40 shrink-0 relative lg:rounded-xl">
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

                {/* Social icons */}

                <div className="flex flex-col items-start gap-2">
                  <div className="flex gap-2">
                    {socialLinks.map((s) => (
                      <Link
                        key={s.label}
                        href={s.url}
                        target="_parent"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className={`${s.bg} w-7 h-7 rounded-md flex items-center justify-center text-white hover:opacity-75 transition-opacity`}
                      >
                        {s.icon}
                      </Link>
                    ))}
                  </div>

                  <button className="bg-[#ffb84c] text-black font-semibold tracking-tight px-5 py-1 flex items-center gap-1 rounded-md hover:opacity-90 cursor-pointer">
                    <UserRoundPlus size={18} /> გამოწერა
                  </button>
                </div>
              </div>
            </div>

            {/* Right side */}

            {/* Followers / Following */}
            <div className="flex items-end  flex-col gap-5">
              <div>
                <button className="bg-[#454369] py-1.5 px-3 rounded-md border border-white/30 hover:opacity-90  cursor-pointer flex items-center gap-2">
                  <SquarePen size={18} /> რედაქტირება
                </button>
              </div>

              <div className="flex gap-5">
                <div className="flex items-center gap-1.5">
                  Followers
                  <span className="text-white text-md font-semibold">
                    {stats.followers}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  Following
                  <span className="text-white text-md font-semibold">
                    {stats.following}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
      
        </div>
      )}



      <div className="flex  mt-10 gap-10">
        <div className="">
          <h5 className="mb-2 font-medium">ჩემს შესახებ</h5>
          <div className="bg-[#181D36] p-3 rounded-md border border-white/15">
            <p>
             {bio}
            </p>
          </div>
        </div>
<SidebarLayout />
        
      </div>

    </section>
  );
}
