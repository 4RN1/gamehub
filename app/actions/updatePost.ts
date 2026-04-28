"use server"

import pool from "@/lib/db"
import { revalidatePath } from "next/cache";

interface updateNews {
    id:number, 
    slug:string,
    image_url:string,
    title:string,
    tags:[],
    short_desc:string,
    post_content:string,
    category:string

}

export async function UpdatePost(
    {
id,
slug,
image_url,
title,
tags,
short_desc,
post_content,
category} : updateNews) {
  

try {
    await pool.query(
      `UPDATE newspost 
       SET 
         slug = $2, 
         image_url = $3, 
         title = $4, 
         tags = $5, 
         short_desc = $6, 
         post_content = $7, 
         category = $8 
       WHERE id = $1`,
      [id, slug, image_url, title, tags, short_desc, post_content, category]
    );

    revalidatePath("/admin/news");
    return { success: true };

  } catch (error) {
    console.error("Failed to update post:", error);
    return { success: false, error: "Failed to update post" };
  }

}