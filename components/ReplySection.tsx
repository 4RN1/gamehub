"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { CornerDownRight, Heart, MessageCircleReply } from "lucide-react";
const ReplySection = () => {

const userReply = [
  {
    id: 1,
    userNick: "alice93", userImg: "/assets/pfp2.webp", date: "4 days ago",
    text: "This is exactly what I was looking for!...",
    likes: 5200,
    replied: null
  },
  {
    id: 2,
    userNick: "markdev", userImg: "/assets/pfp3.avif", date: "12 days ago",
    text: "Had the same issue last week...",
    likes: 312,
    replied: {
      userNick: "alice93", userImg: "/assets/pfp2.webp", date: "now",
      text: "yeah , the whole idiotism i say, they need to fix this asap",
      likes: 48
    }
  },
  {
    id: 3,
    userNick: "sara_ui", userImg: "/assets/pfp4.jpg", date: "20 days ago",
    text: "Great post! I shared it with my whole team...",
    likes: 890,
    replied: null
  },
]


const [reply, setReply] = useState<number | string | null>(null)

  return (
    <>
<div>



</div>



<div className='px-11 py-10'>

    <h3 className='my-5'>Replies</h3>
{userReply.map((item) => (
  <div key={item.id} className='mb-5 pt-4 px-3 border border-[#3a3835] py-4 rounded-md'>
    {/* Main reply */}
    <div className='flex items-center gap-1.5 mb-3'>
      <div className='w-12 h-12 rounded-full overflow-hidden shrink-0'>
        <Image src={item.userImg} alt={item.userNick} width={100} height={100} className='w-full h-full object-cover'/>
      </div>
      <div className='flex gap-1'>
        <span>{item.userNick}</span>•<span>{item.date}</span>
      </div>
    </div>

    <p>{item.text}</p>

    <div className='flex mt-3 gap-3'>
      <p className='flex gap-1'>
        <Heart size={25} className='hover:scale-110 cursor-pointer'/>
        <span>{item.likes}</span>
      </p>
      <p><MessageCircleReply onClick={() => setReply(reply === item.id? null : item.id)} size={25} className='hover:scale-110 cursor-pointer'/></p>
    </div>

    {reply === item.id && (
        <div>
        <textarea name="reply" id="reply" placeholder='Reply...' className='border rounded-md w-full mt-5 p-2'></textarea>
        <div className='flex justify-end gap-3 transition-all '>
        <button onClick={() =>setReply(null) }  className='bg-[#2E2F30] px-2 py-1 rounded-xl hover:bg-[#4b4c4d] cursor-pointer delay-25'>Cancel</button>
        <button onClick={() =>setReply(null)}  className='bg-[#2E2F30] px-2 py-1 rounded-xl hover:bg-[#4b4c4d] cursor-pointer delay-25'>Post</button>
        </div>
        </div>

    )}

    {/* Nested reply */}
{/* Nested reply */}
{item.replied && (
  <div className='ml-5 mt-3'>

    <div className='flex items-center gap-1.5 mb-2'>
      <CornerDownRight size={16} className='text-gray-400 shrink-0' />
      <div className='w-8 h-8 rounded-full overflow-hidden shrink-0'>
        <Image src={item.replied.userImg} alt={item.replied.userNick} width={100} height={100} className='w-full h-full object-cover'/>
      </div>
      <div className='flex gap-1 text-sm'>
        <span>{item.replied.userNick}</span>•<span>{item.replied.date}</span>
      </div>
    </div>

    <p className='text-sm ml-6'>{item.replied.text}</p>

    <div className='flex mt-2 gap-3 ml-6'>
      <p className='flex gap-1'>
        <Heart size={20} className='hover:scale-110 cursor-pointer'/>
        <span className='text-sm'>{item.replied.likes}</span>
      </p>
      <p><MessageCircleReply onClick={() => setReply(reply === `${item.id}-nested` ? null : `${item.id}-nested`)} size={20} className='hover:scale-110 cursor-pointer'/></p>
    </div>

    {reply === `${item.id}-nested` && (
        <div>
        <textarea name="reply" id="reply" placeholder='Reply...' className='border rounded-md w-full mt-5 p-2'></textarea>
        <div className='flex justify-end gap-3 transition-all '>
        <button onClick={() =>setReply(null)}  className='bg-[#2E2F30] px-2 py-1 rounded-xl hover:bg-[#4b4c4d] cursor-pointer delay-25'>Cancel</button>
        <button onClick={() =>setReply(null)}  className='bg-[#2E2F30] px-2 py-1 rounded-xl hover:bg-[#4b4c4d] cursor-pointer delay-25'>Post</button>
        </div>
        </div>

    )}

  </div>
)}
  </div>
))}




</div>



    </>
  )
}

export default ReplySection