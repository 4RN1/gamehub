"use server";

import db from "@/lib/db";



export async function createPost(formData : {

    slug:string,
    image_url:string,
    title:string,
    short_desc:string,
    post_content:string,
    category:string,
    tags:string[];


}) {

    const result = await db.query(
        `INSERT INTO newsposts (slug, image_url, title, short_desc ,post_content, category, tags)
         VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,

         [formData.slug, formData.image_url, formData.title, formData.short_desc, 
     formData.post_content, formData.category, formData.tags]
    );

    return result.rows[0];


    
}
