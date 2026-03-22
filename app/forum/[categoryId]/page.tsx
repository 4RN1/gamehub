import Link from 'next/link'

const threads = [
  { id: '1', title: 'Best action games of 2024 — full ranking', author: 'john_doe', replies: 44, views: 1200, date: 'Jan 15', },
  { id: '2', title: 'God of War vs Devil May Cry — which combat system wins?', author: 'jane_smith', replies: 25, views: 890, date: 'Jan 14',  },
  { id: '3', title: 'Hidden gems you should try this year', author: 'dev_guy', replies: 8, views: 210, date: 'Jan 13',  },
  { id: '4', title: 'Is FromSoftware the king of action RPGs now?', author: 'curious_cat', replies: 67, views: 3400, date: 'Jan 12',},
  { id: '5', title: 'Share your setup — what do you play action games on?', author: 'pixel_pro', replies: 12, views: 340, date: 'Jan 11',},
]

const avatarColors: { [key: string]: string } = {
  john_doe: '#c04828',
  jane_smith: '#1a6fa8',
  dev_guy: '#166b45',
  curious_cat: '#7a4a9e',
  pixel_pro: '#8a6a10',
}

const getInitials = (name: string) =>
  name.split('_').map((n) => n[0].toUpperCase()).join('')

const page = async ({ params }: { params: Promise<{ categoryId: string }> }) => {
  const { categoryId } = await params

  return (
    <div className="min-h-screen bg-[#1a1918] px-6 py-7 font-sans max-w-350 mx-auto">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#7a7770] mb-5">
        <Link href={`/forum/${categoryId}/postId`} className="text-[#5ba4cf] hover:underline">Forum</Link>
        <span>›</span>
        <span className="capitalize">{categoryId}</span>
      </div>

      {/* Header */}
      <div className="flex items-end justify-between border-b border-[#3a3835] pb-4 mb-5">
        <div>
          <p className="text-[11px] font-bold tracking-widest uppercase text-[#e8772e] mb-1">
            Discussion
          </p>
          <h1 className="text-3xl font-bold text-[#e2dfd8] capitalize leading-none">
            {categoryId}
          </h1>
        </div>
        <button className="bg-[#e8772e] hover:bg-[#cf6520] text-white text-sm font-semibold px-4 py-2 rounded cursor-pointer transition-colors">
          + New Thread
        </button>
      </div>

      {/* Stats */}
      <div className="flex gap-5 mb-5">
        <div className="flex items-center gap-2 text-xs text-[#7a7770]">
          <div className="w-1.5 h-1.5 rounded-full bg-[#1e9e72]" />
          {threads.length} threads
        </div>
        
      </div>

      {/* Table */}
      <div className="border border-[#3a3835] rounded-md overflow-hidden">

        {/* Table head */}
       <div className="grid grid-cols-[1fr_80px_80px] bg-[#1e1d1c] border-b border-[#3a3835]  py-2 text-[11px] font-semibold uppercase tracking-wider text-[#7a7770]">
  <div className='pl-5'>Thread</div>
  <div className="text-center">Replies</div>
  <div className="text-center">Views</div>
</div>

        {/* Rows */}
        {threads.map((thread) => (
          <Link
            key={thread.id}
            href={`/forum/${categoryId}/${thread.id}`}
            className="grid grid-cols-[1fr_80px_80px] bg-[#242321] hover:bg-[#2d2c2a] border-b border-[#3a3835] last:border-b-0 transition-colors"
          >
            {/* Main cell */}
            <div className="flex items-start gap-3 px-4 py-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold text-white shrink-0"
                style={{ backgroundColor: avatarColors[thread.author] ?? '#555' }}
              >
                {getInitials(thread.author)}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[#5ba4cf] truncate mb-1 leading-snug">
                  {thread.title}
                </p>
                <div className="flex items-center gap-2 text-[11px] text-[#7a7770] flex-wrap">
                  <span>{thread.author}</span>
                  <span>·</span>
                  <span>{thread.date}</span>
                </div>
              </div>
            </div>

            {/* Replies */}
            <div className="flex flex-col items-center justify-center border-l border-[#3a3835] px-2 py-3">
              <span className="text-[15px] font-semibold text-[#e2dfd8]">{thread.replies}</span>
              <span className="text-[10px] uppercase tracking-wider text-[#7a7770]">replies</span>
            </div>

            {/* Views */}
            <div className="flex flex-col items-center justify-center border-l border-[#3a3835] px-2 py-3">
              <span className="text-[15px] font-semibold text-[#e2dfd8]">
                {thread.views >= 1000 ? `${(thread.views / 1000).toFixed(1)}k` : thread.views}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#7a7770]">views</span>
            </div>

            {/* Last post */}
            
          </Link>
        ))}
      </div>
    </div>
  )
}

export default page