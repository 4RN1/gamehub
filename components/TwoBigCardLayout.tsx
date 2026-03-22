import Image from 'next/image';
import Link from 'next/link';
import React from 'react'



interface testData {
  card: {
    title: string;
    img: string;
  }[];
}



const TwoBigCardLayout = ( { card } : testData ) => {
    return (
      
        <div className="grid gap-5 md:grid-cols-2 max-sm:grid-cols-1 max-sm:col-span-full max-sm:px-2 max-w-325 mx-auto my-5 ">
    {card.map((t) => (
      <Link href="/" key={t.title} className="relative overflow-hidden rounded-xl h-100 cursor-pointer group ">
        <Image src={t.img} alt={t.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute bottom-0 left-0 w-full p-5 bg-linear-to-t from-black/90 via-black/40 to-transparent">
          <h2 className="text-white text-2xl font-bold  leading-snug">{t.title}</h2>
        </div>
      </Link>
    ))}
  </div>
  
    )
}

export default TwoBigCardLayout
