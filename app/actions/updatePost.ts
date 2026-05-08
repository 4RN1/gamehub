"use server"

import pool from "@/lib/db"
import { revalidatePath } from "next/cache";

interface updateNews {
    id:number, 
    slug:string,
    image_url:string,
    title:string,
    tags:string[],
    short_desc:string,
    post_content:string,
    category:string

}

interface updateNews {
    id: number, 
    slug: string,
    image_url: string,
    title: string,
    tags: string[],
    short_desc: string,
    post_content: string,
    category: string,
    slider_status: boolean , // 👈 add
    featured_status:boolean
}

export async function UpdatePost({
  id, slug, image_url, title, tags, short_desc, post_content, category, slider_status, featured_status  // 👈 add
}: updateNews) {
  try {
    await pool.query(
      `UPDATE newsposts 
       SET 
         slug = $2, 
         image_url = $3, 
         title = $4, 
         short_desc = $5, 
         post_content = $6, 
         category = $7,
         tags = $8,
         slider_status = $9,
         featured_status = $10
       WHERE id = $1`,
      [id, slug, image_url, title, short_desc, post_content, category, tags, slider_status, featured_status]  // 👈 add
    );

    revalidatePath("/admin/news");
    return { success: true };
  } catch (error) {
    console.error("UpdatePost error:", error);
    return { success: false, error: "Failed to update post" };
  }
}