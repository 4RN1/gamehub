"use client";

import { UpdatePost } from "@/app/actions/updatePost";
import { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";

interface NewsItem {
  id: number;
  title: string;
  slug: string;
  category: string;
  image_url: string;
  short_description: string;
  tags: string[];
}

interface EditNewsModalProps {
  open: boolean;
  onclose: () => void;
  newsItem: NewsItem | null;
}

const EditNewsModal = ({ open, onclose, newsItem }: EditNewsModalProps) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [newsSlug, setNewsSlug] = useState("");

  // Sync fields when newsItem changes
  useEffect(() => {
    if (newsItem) {
      setTitle(newsItem.title);
      setCategory(newsItem.category);
      setImgUrl(newsItem.image_url);
      setShortDesc(newsItem.short_description);
      setNewsSlug(newsItem.slug);
    }
  }, [newsItem]);

  if (!open) return null;

  return (
    <div>
      <div className="inset-0 bg-black/70 backdrop-blur-2xl absolute w-full h-full z-50">
        <div className="z-60 max-w-300 mx-auto mt-10">
          <div className="flex items-center justify-between mt-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white">Admin / News</p>
              <h1 className="text-2xl font-bold tracking-wide text-white mb-2">Edit Article</h1>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Article Details</p>
              <CgClose color="red" size={23} onClick={onclose} className="cursor-pointer" />
            </div>

            <div className="flex flex-col gap-4 p-6">
              {/* Title */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">Title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter article title..."
                  className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-700"
                />
              </div>

              {/* Category + Cover Image */}
              <div className="flex gap-4">
                <div className="flex flex-1 flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-800 outline-none focus:border-blue-700"
                  >
                    <option value="">Select category...</option>
                    <option value="gaming">Gaming</option>
                    <option value="technology">Technology</option>
                    <option value="console">Console Games</option>
                  </select>
                </div>
                <div className="flex flex-1 flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">Cover Image URL</label>
                  <input
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                    placeholder="https://..."
                    className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-700"
                  />
                </div>
              </div>

              {/* Short Description */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">Short Description</label>
                <input
                  value={shortDesc}
                  onChange={(e) => setShortDesc(e.target.value)}
                  placeholder="Enter short description... (max:150 characters)"
                  className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-700"
                />
              </div>

              {/* Slug */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">Slug</label>
                <input
                  value={newsSlug}
                  onChange={(e) => setNewsSlug(e.target.value)}
                  className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-700"
                />
              </div>
            </div>

            <button
              type="button"
              className="px-4 py-2 bg-blue-700 text-white my-2 mx-6 rounded-lg"
              onClick={() =>
                UpdatePost({
                  slug: newsSlug,
                  title,
                  category,
                  image_url: imgUrl,
                  short_description: shortDesc,
                })
              }
            >
              შეცვლა
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNewsModal;