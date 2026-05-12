"use server";

import pool from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteSupportMsg(id: number) {
  await pool.query(`DELETE FROM support WHERE id = $1`, [id]);
  revalidatePath("/dashboard/news");

}