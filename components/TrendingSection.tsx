import Image from "next/image"
import Link from "next/link"

const TrendingSection = () => {
  return (
 
<section className=" min-h-screen p-6">
  <div className="max-w-7xl mx-auto grid grid-cols-3 gap-5">
    
    {/* Main featured - 3 cols */}
    <div className="col-start-1 col-end-3 h-120 row-start-1 row-end-2 bg-gray-600 rounded">
        <Image src='/assets/gg.jpg' width={730} height={1050}  alt="random image" />
    </div>

    {/* Sidebar - 1 col, full height */}
    <div className="col-span-1 row-start-1 row-end-2 h-full min-h-96 bg-gray-700 rounded">

    </div>

    {/* Bottom 4 cards */}
    <div className="col-start-1 col-end-4 grid grid-cols-4 gap-5  mt-3">
      <div className="bg-gray-300 rounded h-50">
           <div> <Image src='/assets/gg.jpg' width={350} height={200} alt="random image" /></div>
      </div>
      <div className="bg-gray-400 rounded h-50">
<div> <Image src='/assets/gg.jpg' width={350} height={200} alt="random image" /></div>
      </div>
      <div className="bg-gray-500 rounded h-50">
<div> <Image src='/assets/gg.jpg' width={350} height={200} alt="random image" /></div>
      </div>
      <div className="bg-gray-600 rounded h-50">
<div> <Image src='/assets/gg.jpg' width={350} height={200} alt="random image" /></div>
      </div>
    </div>
  </div>
</section>
  )
}

export default TrendingSection
