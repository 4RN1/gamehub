import Image from "next/image"
import Link from "next/link"
import { MoveRight, } from "lucide-react"

const latestTestNews = [
  { 
    id: 1,
    title: "GTA 6-ის გამოსვლის თარიღი დადასტურდა ",
    img: "/assets/test5.avif"
  },
  {
    id: 2,
    title: "Elden Ring-ის კიდევ ერთი რეკორდი",
    img: "/assets/test7.webp"
  },
  {
    id: 3,
    title: "PlayStation 6-ის ტექნიკური ინფორმაცია გაიჟონა",
    img: "/assets/test6.jpg"
  },
  {
    id: 4,
    title: "Call Of Duty 6 წლის შემდეგ Steam-ზე დაბრუნდა",
    img: "/assets/test4.jpg"
  }
]

const sidebarNews = [
  {
    id: 1,
    title: "Nintendo Switch 2 საქართველოშიც გაიყიდება",
    img: "/assets/test8.webp"
  },
  {
    id: 2,
    title: "Cyberpunk 2077-ის ახალი DLC გამოვიდა",
    img: "/assets/test9.jpg"
  },
  {
    id: 3,
    title: "Xbox Series X ფასი შემცირდა ევროპაში",
    img: "/assets/test2.webp"
  },
  {
    id: 4,
    title: "Minecraft-მა 300 მილიონი გაყიდული ასლი გადააჭარბა",
    img: "/assets/test7.webp"
  }
]


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
 
<section className="  py-5">
  <div className="max-w-325 mx-auto grid md:grid-cols-3 gap-5  max-sm:grid-cols-1">
    
    {/* Main featured - 3 cols */}
 <div className="col-start-1 col-end-3 h-130 row-start-1 row-end-2 bg-gray-600 rounded-xl relative overflow-hidden group cursor-pointer max-sm:col-span-full max-sm:h-72">
  <Image src='/assets/test3.webp' fill alt="random image" className="object-cover object-left group-hover:scale-105 transition-transform duration-300 " />
  <div className="absolute bottom-0 left-0 w-full pb-5 pl-5 bg-linear-to-t from-black/90 via-black/40 to-transparent">
    <h2 className="text-white text-5xl font-bold leading-snug ">ახალი მარიოს თამაში</h2>
  </div>
</div>

    {/* Sidebar - 1 col, full height */}
  <div className="col-span-1 row-start-1 row-end-2 h-full min-h-96 max-sm:col-span-full max-sm:row-auto ml-5">
  <h2 className="text-white text-xl font-bold text-center py-1.5">უახლესი ამბები</h2>

  <div className="bg-[#383838] px-5 rounded-md">
    {sidebarNews.map((t) => (
      <div key={t.id} className="grid grid-cols-3 border-b border-[#474747] items-center py-3 gap-5 last:border-b-0">
        <Link href="/" className="col-span-2 text-white text-md font-bold hover:underline ">
        {}
        {t.title}</Link>
        <Link href ="/" className="relative h-20 rounded-2xl overflow-hidden hover:opacity-90">
          <Image src={t.img} fill alt={t.title} className="object-cover"/>
        </Link>
      </div>
    ))}
  </div>
  <div className="flex justify-end">
   <Link href="/news" className="mt-2 flex items-center gap-1 text-[#d3d3d3] font-bold  hover:text-[#f47938]  transition-all delay-5 max-sm:pr-2">
  მეტი <span className="text-[#f47938]"><MoveRight size={18} /></span>
</Link>
    </div>
</div>

    {/* Bottom 4 cards */}
<div className="col-start-1 col-end-4 grid lg:grid-cols-4 gap-5 md:grid-cols-2 max-sm:grid-cols-1 max-sm:col-span-full max-sm:px-2">
  {latestTestNews.map((t) => (
    <div key={t.title} className="relative overflow-hidden rounded-xl h-62 cursor-pointer group ">
      <Image src={t.img} alt={t.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute bottom-0 left-0 w-full p-3 bg-linear-to-t from-black/90 via-black/40 to-transparent">
        <h2 className="text-white text-md font-bold  leading-snug">{t.title}</h2>
      </div>
    </div>
  ))}
</div>
  </div>
</section>
  )
}

export default TrendingSection
