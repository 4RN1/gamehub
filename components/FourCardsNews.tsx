import Image from "next/image"
import Link from "next/link";


interface fourCardInfo {
  id: number;
  slug: string;
  image_url: string;
  title: string;
  short_desc: string;
}

interface NewsLayout {
  database?: fourCardInfo[];
}


const FourCardsNews = ({database} : NewsLayout) => {
  return (
    
<div className="col-start-1 col-end-4 grid lg:grid-cols-4 gap-5 md:grid-cols-2 max-sm:grid-cols-1 max-sm:col-span-full max-sm:px-2 mx-10">
  {database?.slice(0, 4).map((t) => (
    <Link href={`/news/${t.slug}`} key={t.title} className="relative overflow-hidden rounded-xl h-70 cursor-pointer group">
      <img 
        src={t.image_url} 
        alt={t.title}  
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
      />
      <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
        <h2 className="text-white text-md font-bold leading-snug">{t.title}</h2>
      </div>
    </Link>
  ))}
</div>
   
  )
}

export default FourCardsNews
