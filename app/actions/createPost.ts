"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: {
    slug: string,
    image_url: string,
    title: string,
    short_desc: string,
    post_content: string,
    category: string,
    tags: string[];
    slider_status: boolean;
}) {

  try {
    const result = await db.query(
      `INSERT INTO newsposts (slug, image_url, title, short_desc, post_content, category, tags, slider_status)
       VALUES ($1, $2, $3, $4, $5, $6, $7 , $8) RETURNING *`,
      [formData.slug, formData.image_url, formData.title, formData.short_desc,
       formData.post_content, formData.category, formData.tags, formData.slider_status]
    );

    revalidatePath("/admin/news");
    console.log(result.rows[0])
    return { success: true, data: result.rows[0] };

  } catch (error) {
    console.error("createPost error:", error);
    return { success: false, error: "Failed to create post" };
  }
}