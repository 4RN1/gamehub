// app/news/[slug]/page.tsx

import pool from "@/lib/db";
import { formatDate } from "@/lib/formatDate";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function PostPage({params,}: { params: Promise<{ slug: string }>}) {
  const { slug } = await params; // 👈 unwrap it

  const result = await pool.query(
    `SELECT * FROM newsposts WHERE slug = $1`,
    [slug]
  );

  const post = result.rows[0];

  if (!post) notFound();

if (!post) notFound();

  return (

    <div className="bg-zinc-900 ">
    <div className="min-h-screen max-w-280 mx-auto bg-zinc-900 flex flex-col items-center max-lg:px-10 px-5 py-10">
      {/* Tags */}
      <div className="flex flex-wrap gap-2 w-full max-w-225 mb-4">
        {post.tags.map((tag: string) => (
          <span key={tag} className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="w-full max-w-225 text-2xl md:text-3xl font-bold text-white mb-3">
        {post.title}
      </h1>

      {/* Date */}
      <p className="w-full max-w-225 text-sm text-gray-400 mb-6">
        Published {formatDate(post.created_at)}
      </p>

      {/* Banner */}
      {post.image_url && (
        <div className="relative w-full max-w-225  md:h-fit rounded-xl overflow-hidden mb-5 lg:mb-12">
          <img
            src={post.image_url}
            alt={post.title}
            // fill
            className="object-cover w-full"
          />
        </div>
      )}

      {/* Content */}
{/* Content */}


<div
  className="w-full max-w-225 rounded-lg  text-white text-md text-justify leading-relaxed prose prose-invert"
  dangerouslySetInnerHTML={{ __html: post.post_content }}
/>

    </div>





    </div>
  );
}