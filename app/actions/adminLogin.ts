"use server";

import pool from "@/lib/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function adminLogin(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const result = await pool.query(
    "SELECT * FROM admin WHERE username = $1 AND password = $2",
    [username, password]
  );

  if (result.rows.length === 0) {
    return { error: "Wrong username or password" };
  }

  const cookieStore = await cookies();
  cookieStore.set("admin", "true", { httpOnly: true });
  redirect("/dashboard/news-list");
}