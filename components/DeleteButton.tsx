// components/DeleteButton.tsx
"use client";

import { deletePost } from "@/app/actions/deletePost";
import { X } from "lucide-react";


export default function DeleteButton({ id }: { id: number }) {
  return (
    <button
      onClick={() => deletePost(id)}
      className="border border-gray-200 hover:border-orange-500 hover:text-orange-500 text-gray-400 rounded-md w-7 h-7 flex items-center justify-center transition-colors"
    >
      <X size={13} />
    </button>
  );
}