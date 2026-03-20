import { trendingArticles } from '@/lib/testData';
import Image from 'next/image';






const SidebarLayout = () => {
  return (
       <aside className="w-72 shrink-0">
            {/* Trending Header */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-4 h-4 bg-orange-500 rounded-sm shrink-0" />
              <h2 className="text-sm font-extrabold uppercase tracking-widest">
                Trending Now
              </h2>
            </div>
 
            {/* Trending List */}
            <div className="flex flex-col gap-4">
              {trendingArticles.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 cursor-pointer group"
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-14 shrink-0 overflow-hidden rounded">
                    <div className="w-full h-full bg-[#2e2e2e] rounded" />
                    <Image src={item.image} alt={item.title} fill />
                  </div>
 
                  {/* Title */}
                  <p className="text-sm font-semibold leading-snug group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </aside>
 

  )
}

export default SidebarLayout