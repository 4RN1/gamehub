"use client"

import Image from "next/image"
import Link from "next/link"
import { MoveRight, } from "lucide-react"
import { latestTestNews, sidebarNews , gg, swiperContentData} from "@/lib/testData"
import FourCardsNews from "./FourCardsNews"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'

interface latestNews {
    id:number,
    title:string,
    img:string,
  }

  interface sidebarNews {
     id:number,
    title:string,
    img:string,
  }


const TrendingSection = () => {

  


  return (
 
<section className="py-5 max-w-440 mx-auto">
 <div className="h-120 rounded-xl overflow-hidden mb-10 max-sm:h-100 max-sm:mx-2">
  <Swiper
    spaceBetween={0}
    centeredSlides={true}
    autoplay={{ delay: 3000, disableOnInteraction: false}}
    pagination={{ clickable: true }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="h-full"
  >
    {swiperContentData.map((article) => (
      <SwiperSlide key={article.id}>
        <div className="relative w-full h-full flex items-center   bg-[#0f172a]">
          <div className="w-[70%]">
            <h2 className="text-2xl font-semibold text-white mt-2 mb-3 pl-4 max-w-xl leading-snug">
              {article.title}
            </h2>
          </div>


                {/* background */}
          <div className="relative w-full h-full ">
 <Image
    src={article.img}
    alt={article.title}
    fill
    className="object-cover object-center"
  />
<div className="absolute inset-0 bg-linear-to-r from-[#0f172a] via-[#1a1a2e]/5 to-transparent" />
          </div>

        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
    
    {/* Main featured - 3 cols */}
 {/* <Link href="#" className="col-start-1 col-end-3 h-130 row-start-1 row-end-2 bg-gray-600 rounded-xl relative overflow-hidden group cursor-pointer max-sm:col-span-full max-sm:h-72">
  <Image src='/assets/test3.webp' fill sizes="width:100%;" alt="random image" className="object-cover object-left group-hover:scale-105 transition-transform duration-300 " />
  <div className="absolute bottom-0 left-0 w-full pb-5 pl-5 bg-linear-to-t from-black/90 via-black/40 to-transparent">
    <h2 className="text-white text-5xl font-bold leading-snug ">ახალი მარიოს თამაში</h2>
  </div>
</Link> */}

    {/* Sidebar - 1 col, full height */}
  {/* <div className="col-span-1 row-start-1 row-end-2 h-full min-h-96 max-sm:col-span-full max-sm:row-auto ml-5">
  <h2 className="text-white text-xl font-bold text-center py-1.5">უახლესი ამბები</h2>

  <div className="bg-[#383838] px-5 rounded-md">
    {sidebarNews.map((t) => (
      <div key={t.id} className="grid grid-cols-3 border-b border-[#474747] items-center py-3 gap-5 last:border-b-0">
        <Link href="/" className="col-span-2 text-white text-md font-bold hover:underline ">
        {}
        {t.title}</Link>
        <Link href ="/" className="relative h-20 rounded-2xl overflow-hidden hover:opacity-90">
          <Image src={t.img} fill sizes="width:100%;" alt={t.title} className="object-cover"/>
        </Link>
      </div>
    ))}
  </div>
  <div className="flex justify-end">
   <Link href="/news" className="mt-2 flex items-center gap-1 text-[#d3d3d3] font-bold  hover:text-[#f47938]  transition-all delay-5 max-sm:pr-2">
  მეტი <span className="text-[#f47938]"><MoveRight size={18} /></span>
</Link>
    </div>
</div> */}

    {/* Bottom 4 cards */}


<FourCardsNews data = {latestTestNews}/>

</section>                
  )
}

export default TrendingSection
