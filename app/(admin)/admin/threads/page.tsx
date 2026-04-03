"use client"
import { useState } from "react"
import { Pencil, X, Copy } from "lucide-react"

const threads = [

]

export default function ThreadsList() {
  const [selected, setSelected] = useState<number[]>([])

  const toggle = (id: number) =>
    setSelected(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )

  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-800 p-6 flex flex-col gap-5">

      {/* Filter */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-5">
        <p className="text-xs font-semibold text-black uppercase tracking-widest mb-3">Filter</p>
        <div className="flex gap-3 flex-wrap items-center">
          <input type="text" placeholder="Title" className="bg-white border border-gray-300 rounded-md text-sm px-3 py-2 w-48 outline-none focus:border-blue-800" />
          <input type="text" placeholder="Author" className="bg-white border border-gray-300 rounded-md text-sm px-3 py-2 w-48 outline-none focus:border-blue-800" />
          <input type="text" placeholder="Category" className="bg-white border border-gray-300 rounded-md text-sm px-3 py-2 w-48 outline-none focus:border-blue-800" />
          <button className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-2 rounded-md">
            Filter
          </button>
          <button className="border border-blue-700 text-blue-500 hover:bg-blue-50 text-sm font-semibold px-5 py-2 rounded-md">
            Clear
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-black tracking-wide">Threads</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                {["", "Title", "Slug", "Author", "Category", "Created At", "Copy URL", "Action"].map(h => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {threads.map(item => (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selected.includes(item.id)}
                      onChange={() => toggle(item.id)}
                      className="accent-orange-600 w-4 h-4"
                    />
                  </td>

                  <td className="px-4 py-3 text-sm font-medium max-w-[180px] truncate">
                    {item.title}
                  </td>

                  <td className="px-4 py-3 text-xs text-gray-500">
                    {item.slug}
                  </td>

                  <td className="px-4 py-3 text-sm text-gray-700">
                    {item.author}
                  </td>

                  <td className="px-4 py-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-600">
                      {item.category}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-xs text-gray-500">
                    {item.createdAt}
                  </td>

                  <td className="px-4 py-3">
                    <button className="border border-gray-200 hover:border-green-500 hover:text-green-500 text-gray-400 rounded-md w-15 h-7 flex items-center justify-center">
                      <Copy size={13} />
                    </button>
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button className="border border-gray-200 hover:border-blue-500 hover:text-blue-500 text-gray-400 rounded-md w-7 h-7 flex items-center justify-center">
                        <Pencil size={13} />
                      </button>
                      <button className="border border-gray-200 hover:border-orange-500 hover:text-orange-500 text-gray-400 rounded-md w-7 h-7 flex items-center justify-center">
                        <X size={13} />
                      </button>
                    </div>
                  </td>

                </tr>
              ))}

              {threads.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-4 py-6 text-center text-sm text-gray-500">
                    პოსტები ვერ მოიძებნა
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}