"use client";

import Link from "next/link";
import { Dot,  } from "lucide-react";

import FourCardsNews from "./FourCardsNews";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { formatDate } from "@/lib/formatDate";

interface swiperContentType {
  id:number,
  image_url:string,
  title:string,
  created_at:string,
  category:string,
  short_desc:string,
  slug:string
}

interface swiperNews {
  database?: swiperContentType[];
}


const TrendingSection = ({database}: swiperNews) => {
  return (
    <section className="py-5 max-w-440 mx-auto sm:px-4">
      <div className="h-125 rounded-xl overflow-hidden mb-10 max-sm:h-100 max-sm:mx-2">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full"
        >
          {database?.map((article) => (
            <SwiperSlide key={article.id}>
       <div className="relative w-full h-full flex items-end pb-10 bg-[#0f172a] overflow-hidden">
  <img
    src={article.image_url}
    alt=""
    className="absolute inset-0 w-full h-full object-cover "
     
  />
  <div className="absolute inset-0 bg-black/50 " />
  <div className="pl-10 relative max-sm:pl-5">
  <h1 className=" z-10 text-4xl font-bold text-white mt-2 mb-5  max-sm:text-[28px]">
    {article.title}
  </h1>
<div className="flex gap-2 items-center mb-2">
<span className="font-medium italic">{`${formatDate(article.created_at)}`}</span> 
<Dot style={{ color: '[#fcfcfc89]' }} />
<span className="bg-red-800 text-white px-2 py-0.5 rounded-md font-medium">{article.category}</span>
  </div>   

  <p className="max-w-xl font-medium mb-10  max-sm:text-sm">{article.short_desc}</p>

  <Link href={`news/${article.slug}`} className="bg-[#e00e0e] text-lg font-medium text-white px-4 py-1 self-end rounded-md hover:bg-[#ce1111]/90 transition-colors">
    სრულად
  </Link>
  


  </div>
</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>



  
    </section>
  );
};

export default TrendingSection;
