"use client";

import { Pencil, Plus } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";

import DeleteButton from "@/components/buttons/DeleteButton";
import CopyToClipboardButton from "@/components/buttons/CopyToClipboardButton";
import EditNewsModal from "./EditNewsModal";
import { useState } from "react";

interface newsItem {
  id: number;
  title: string;
  created_at: string;
  tags: string[];
  slug: string;
  category: string;
  image_url: string;
  short_desc: string;
}

interface AdminNewsListProps {
  news: newsItem[];
}

const AdminNewsList = ({ news }: AdminNewsListProps) => {
  const [editOpen, setEditOpen] = useState(false);
  const [editSlug, setEditSlug] = useState("");

  return (
    <div>
      <div className="min-h-screen w-full bg-gray-100 text-gray-800 p-6 flex flex-col gap-5">
        {/* Filter */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-5 flex justify-between">
          <div>
            <p className="text-xs font-semibold text-black uppercase tracking-widest mb-3">
              Filter
            </p>
            <div className="flex gap-3 flex-wrap items-center">
              <input type="text" placeholder="Title" className="bg-white border border-gray-300 rounded-md text-sm text-gray-700 px-3 py-2 w-48 outline-none focus:border-blue-800 placeholder:text-gray-400" />
              <input type="text" placeholder="Status" className="bg-white border border-gray-300 rounded-md text-sm text-gray-700 px-3 py-2 w-48 outline-none focus:border-blue-800 placeholder:text-gray-400" />
              <input type="text" placeholder="mm/dd/yy" className="bg-white border border-gray-300 rounded-md text-sm text-gray-700 px-3 py-2 w-48 outline-none focus:border-blue-800 placeholder:text-gray-400" />
              <button className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors">Filter</button>
              <button className="border border-blue-700 text-blue-500 hover:bg-blue-50 text-sm font-semibold px-5 py-2 rounded-md transition-colors">Clear</button>
            </div>
          </div>
          <Link href="/dashboard/add-news" className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors flex items-center gap-2">
            <Plus /> Add News
          </Link>
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
                  {["", "Title", "Created At", "Tags", "Copy URL", "Action"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-widest">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {news.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      <input type="checkbox" className="accent-orange-600 w-4 h-4" />
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 font-medium max-w-45 truncate">{item.title}</td>
                    <td className="px-4 py-3 text-xs text-gray-500">{formatDate(item.created_at)}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md border border-gray-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3 cursor-pointer">
                      <CopyToClipboardButton slug={item.slug} />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setEditSlug(item.slug);
                            setEditOpen(true);
                          }}
                          className="border border-gray-200 cursor-pointer hover:border-blue-500 hover:text-blue-500 text-gray-400 rounded-md w-7 h-7 flex items-center justify-center transition-colors"
                        >
                          <Pencil size={13} />
                        </button>
                        <DeleteButton id={item.id} />
                      </div>
                    </td>
                  </tr>
                ))}

                {news.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-3 text-center text-gray-500">
                      სიახლეები არ არის დამატებული
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <EditNewsModal
          open={editOpen}
          onclose={() => setEditOpen(false)}
          newsItem={news.find((item) => item.slug === editSlug)}
        />
      </div>
    </div>
  );
};

export default AdminNewsList;