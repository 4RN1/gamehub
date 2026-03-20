import Link from "next/link";

import { MoveRight } from "lucide-react";
import Image from "next/image";


interface categorySectionProps {

    sectionTitle:string,
    items:{ date:string,
      title:string,
        img:string}[]
    
}
const CategorySection = ({sectionTitle, items} : categorySectionProps) => {
  return (
   <section className=" pb-5 ">
      <div className="flex  gap-4 max-w-325 mx-auto pb-5 pt-5 max-sm:px-2"> 
        <h3 className="max-sm:text-2xl">{sectionTitle}</h3> <Link
          href="/news"
          className="mt-2 flex items-center gap-1 text-[#d3d3d3] font-bold text-md  hover:text-[#f47938] transition-all delay-5">
           მეტი <span className="text-[#f47938] "> <MoveRight size={18}  /></span>
        </Link>
      </div>
      <div>
        <div className="grid lg:grid-cols-5 gap-3 max-w-325 mx-auto md:grid-cols-3 max-sm:grid-cols-1 max-sm:px-2">
          {
            items.map((t) => (
                <div key={t.title} className="relative overflow-hidden rounded-xl h-62 cursor-pointer group">
              <Image src={t.img} alt={t.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute bottom-0 left-0 w-full p-3 bg-linear-to-t from-black/90 via-black/40 to-transparent">
              <p className="text-sm font-medium">{t.date}</p>
                <h2 className="text-white text-md font-bold  leading-snug">{t.title}</h2>
              </div>
            </div>

            ))
            
}
        </div>
      </div>
  </section>
  );
};

export default CategorySection;
