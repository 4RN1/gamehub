import BackButton from "@/components/BackButton";
import PostMenu from "@/components/PostMenu";
import { Bookmark, Eye, Heart, MessageCircleReply } from "lucide-react";
import Image from "next/image";
import React from "react";



const userPost = {
  userImg: "/assets/gg.jpg",
  userNick: "demonshadows222",
  date: "15.03.2026",
  postTitle: "Anyone else think the new ranked system is completely broken?",
  postText: `So I've been grinding ranked for the past two weeks and I genuinely cannot wrap my head around the new matchmaking algorithm they pushed in the last patch. I went on a 7-game win streak yesterday — solid games, top of the leaderboard every single round — and somehow ended up with LESS LP than when I started because of "match quality adjustments" or whatever that tooltip means.\n\nI get that they're trying to fix smurfing, but punishing legitimate players who are clearly performing above their rank is just backwards. Half my lobby last night was either AFK or bought accounts, and I'm the one eating the LP penalty?\n\nPosted my stats below. If anyone has actually figured out how this system works, drop your findings in the thread. At this point I'm convinced the devs just threw darts at a whiteboard.`,
  tags: ["ranked", "matchmaking", "smurf", "bug?"],
  replies: 47,
  views: 1204,
  favorites: 83,
  like:500
};

const page = async ({ params }: { params: Promise<{ postId: string }> }) => {
  const { postId } = await params;

  return (
    <>
      {/* User info , posted date */}
      <section className="min-h-screen  max-w-200 mx-auto">
        <div className="flex   mt-10 items-center  justify-between">
          <div className="flex items-center gap-2">
            <BackButton />
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
              <Image
                src={userPost.userImg}
                alt={userPost.userNick}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs text-[#c3c7ca] mb-0.5">
                {userPost.userNick}
              </p>
              <p className="text-xs  text-[#a0a7ad]">{`Posted ${userPost.date}`}</p>
            </div>
          </div>

          <PostMenu />
        </div>

        <div className="px-11 py-2">
          <h1 className="text-2xl pb-2 pt-2 mb-3">{userPost.postTitle}</h1>

          <p className="text-[#BBC3CB] text-[15px] leading-6  tracking-wide mb-5">
            {userPost.postText}
          </p>

          {userPost.tags.map((item) => (
            <span
              key={item}
              className={`text-xs px-3 py-1 rounded-full bg-green-800  mr-2 `}
            >
              {item}
            </span>
          ))}

{/* like, comment, favorites */}
            <div className="flex gap-5 mt-5">

            <p className="flex gap-1"><Heart size={25}/><span>{userPost.like}</span> </p>
            <p className="flex gap-1"><MessageCircleReply size={25}/><span>{userPost.replies}</span> </p>
            <p className="flex gap-1"><Bookmark size={25}/><span>{userPost.favorites}</span></p>
            <p className="flex gap-1"><Eye size={25}/><span>{userPost.views}</span></p>


            </div>

        </div>
      </section>
    </>
  );
};

export default page;
