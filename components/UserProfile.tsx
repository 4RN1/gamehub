"use client";

import { SquarePen, UserRoundPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/lib/testData";
import SidebarLayout from "./SidebarLayout";


interface UserStats {
  followers: number;
  following: number;
}

interface UserProfileInfo {
  profileImageUrl: string;
  nickname: string;
  uniqueId: string;
  createdDate:string;
  stats: UserStats;
}

const accountCreated = true;

export default function UserProfile({
  
  profileImageUrl,
  nickname,
  uniqueId,
  createdDate,
 stats
}: UserProfileInfo) {
  return (
    <section className=" mx-auto  md:my-4 lg:my-8 lg:px-10">

      {accountCreated && (
      
        <div
          className="relative bg-cover bg-center h-180 max-md:h-150  flex justify-center items-center overflow-hidden rounded-2xl max-lg:rounded-none"
          style={{ backgroundImage: `url(${profileImageUrl})` }}
        >
          <div className="absolute inset-0 bg-black/55 backdrop-blur-xl" />

          <div>
         
            <div className="flex flex-col items-center justify-center  relative gap-4 ">
              <div className="w-27 h-27 md:w-35 md:h-35 overflow-hidden ring-4 ring-white/20 shrink-0 relative rounded-full ">
                <Image
                  src={profileImageUrl}
                  alt="Profile image"
                  fill
                  className="object-cover "
                />
              </div>

              <div className="flex flex-col items-center gap-6">
                <h2 className="text-white  text-3xl max-md:text-2xl font-bold leading-none">
                  {nickname}
                </h2>

                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-white/60 text-2xl max-md:text-xl ">{uniqueId}</span>
                </div>

                <div className="flex gap-10 justify-center font-medium  backdrop-blur-2xl border border-white/20 shadow-md shadow-black/10 px-12 py-4 rounded-2xl">
                  <p className="flex flex-col items-center text-xl max-md:text-lg"><span className="font-bold text-[#e6ffc5]">{stats.followers}</span>FOLLOWERS</p>
                  <p className="flex flex-col items-center text-xl max-md:text-lg"><span className="font-bold text-[#e6ffc5]">{stats.following}</span>FOLLOWING</p>
                </div>

               <div className="flex gap-10 justify-center font-medium  backdrop-blur-2xl border border-white/20 shadow-md shadow-black/10 px-5 py-4 rounded-xl ">

               <div className="bg-white/5  border border-white/10 shadow-lg shadow-black/10 px-5 py-3 rounded-xl">
               
               {createdDate}
               </div>

                </div>

              </div>
            </div>
            </div>
          </div>
      
      )}
    </section>
  );
}
