import { Dot, Eye,  } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface thread {
    user:string,
    userImg:string,
    createdDate:string,
    slug:string,
    threadTitle:string,
    threadText:string,
    threadViews:number
}


const ForumPosts = (params : thread) => {
  return (
   <>
   <div  className='max-w-200 mx-auto my-10 border-y border-y-white/10 py-5 hover:bg-white/3 px-2 '>
   <Link href={params.slug} className='hover:bg-white/50 '>
{/* profile id name , posted date */}
<div className='relative flex items-center justify-between '>
    <div className='flex items-center'>
    <div className='object-cover relative h-8 w-8 mr-1'>
    <Image src={params.userImg} alt={params.user} fill className='object-cover rounded-full '/>
    </div>
    <p className='text-sm'>{params.user}</p>
    <Dot/>
    <p className='text-sm'>{params.createdDate}</p>
    </div>
</div>

<h3 className='my-2'>{params.threadTitle}</h3>
<p>{params.threadText}</p>

<p className='flex gap-1 mt-5 items-center text-sm'><Eye size={20}/><span className='text-md'>{params.threadViews} </span></p>
   </Link>
   </div>
   </>
  )
}

export default ForumPosts