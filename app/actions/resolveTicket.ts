"use server"
import pool from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function resolveTicket(id: number) {
  await pool.query("UPDATE support SET resolved = true WHERE id = $1", [id])
  revalidatePath("/dashboard/support")
}