import Image from "next/image"


interface testData {
  data: {
    title: string;
    img: string;
  }[];
}


const FourCardsNews = ({data} : testData) => {
  return (
    
      <div className="col-start-1 col-end-4 grid lg:grid-cols-4 gap-5 md:grid-cols-2 max-sm:grid-cols-1 max-sm:col-span-full max-sm:px-2">
  {data.map((t) => (
    <div key={t.title} className="relative overflow-hidden rounded-xl h-70 cursor-pointer group ">
      <Image src={t.img} alt={t.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute bottom-0 left-0 w-full p-3 bg-linear-to-t from-black/90 via-black/40 to-transparent">
        <h2 className="text-white text-md font-bold  leading-snug">{t.title}</h2>
      </div>
    </div>
  ))}
</div>
   
  )
}

export default FourCardsNews
