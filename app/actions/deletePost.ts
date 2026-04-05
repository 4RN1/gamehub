"use server";

import pool from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deletePost(id: number) {
  await pool.query(`DELETE FROM newsposts WHERE id = $1`, [id]);
  revalidatePath("/admin/news");

}