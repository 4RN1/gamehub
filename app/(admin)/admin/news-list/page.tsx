"use client"
import { useState } from "react"
import { Pencil, X, Copy,} from "lucide-react"




const news = [
  { id: 1, title: "We heard You Wanted to add SS...", status: "Published", visibility: "Private", publishOn: "Dec 3, 2025", createdAt: "Dec 3, 2025, 10:50 pm", updatedAt: "Mar 15, 2026, 11:35 am" },
  { id: 2, title: "New Season Update — What's Coming...", status: "Published", visibility: "Public", publishOn: "Dec 3, 2025", createdAt: "Dec 3, 2025, 10:50 pm", updatedAt: "Mar 15, 2026, 11:35 am" },
  { id: 3, title: "Top 10 Games of 2025 Ranked", status: "Draft", visibility: "Private", publishOn: "—", createdAt: "Dec 3, 2025, 10:50 pm", updatedAt: "Mar 15, 2026, 11:35 am" },
  { id: 4, title: "GameHub Tournament Announced!", status: "Published", visibility: "Public", publishOn: "Dec 3, 2025", createdAt: "Dec 3, 2025, 10:50 pm", updatedAt: "Mar 15, 2026, 11:35 am" },
]

export default function NewsList() {
  const [selected, setSelected] = useState<number[]>([])

  const toggle = (id: number) =>
    setSelected(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])

  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-800 p-6 flex flex-col gap-5">

  {/* Filter */}
  <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-5">
    <p className="text-xs font-semibold text-black uppercase tracking-widest mb-3">Filter</p>
    <div className="flex gap-3 flex-wrap items-center">
      <input type="text" placeholder="Title" className="bg-white border border-gray-300 rounded-md text-sm text-gray-700 px-3 py-2 w-48 outline-none focus:border-blue-800 placeholder:text-gray-400" />
      <input type="text" placeholder="Status" className="bg-white border border-gray-300 rounded-md text-sm text-gray-700 px-3 py-2 w-48 outline-none focus:border-blue-800 placeholder:text-gray-400" />
      <input type="text" placeholder="mm/dd/yy" className="bg-white border border-gray-300 rounded-md text-sm text-gray-700 px-3 py-2 w-48 outline-none focus:border-blue-800 placeholder:text-gray-400" />
      <button className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors">Filter</button>
      <button className="border border-blue-700 text-blue-500 hover:bg-blue-50 text-sm font-semibold px-5 py-2 rounded-md transition-colors">Clear</button>
    </div>
  </div>

  {/* Table */}
  <div className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden">
    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
      <h1 className="text-2xl font-bold text-black tracking-wide">News</h1>
      
    </div>

    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            {["", "Title", "Status", "Visibility", "Publish On", "Created At", "Updated At", "Copy URL", "Action"].map(h => (
              <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-widest">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {news.map(item => (
            <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3">
                <input type="checkbox" checked={selected.includes(item.id)} onChange={() => toggle(item.id)} className="accent-orange-600 w-4 h-4" />
              </td>
              <td className="px-4 py-3 text-sm text-gray-700 font-medium max-w-[180px] truncate">{item.title}</td>
              <td className="px-4 py-3">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${item.status === "Published" ? "bg-green-100 text-green-600 border border-green-200" : "bg-orange-100 text-orange-500 border border-orange-200"}`}>
                  {item.status}
                </span>
              </td>
              <td className="px-4 py-3">
                <button className={`text-xs font-semibold px-3 py-1 rounded-full ${item.visibility === "Private" ? "bg-blue-100 text-blue-500" : "bg-green-100 text-green-600"}`}>
                  {item.visibility}
                </button>
              </td>
              <td className="px-4 py-3 text-xs text-gray-500">{item.publishOn}</td>
              <td className="px-4 py-3 text-xs text-gray-500">{item.createdAt}</td>
              <td className="px-4 py-3 text-xs text-gray-500">{item.updatedAt}</td>
              <td className="px-4 py-3">
                <button className="border border-gray-200 hover:border-green-500 hover:text-green-500 text-gray-400 rounded-md w-15 h-7 flex items-center justify-center transition-colors">
                  <Copy size={13} />
                </button>
              </td>
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <button className="border border-gray-200 hover:border-blue-500 hover:text-blue-500 text-gray-400 rounded-md w-7 h-7 flex items-center justify-center transition-colors">
                    <Pencil size={13} />
                  </button>
                  <button className="border border-gray-200 hover:border-orange-500 hover:text-orange-500 text-gray-400 rounded-md w-7 h-7 flex items-center justify-center transition-colors">
                    <X size={13} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
  )
}