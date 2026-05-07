import pool from '@/lib/db'

export async function GET() {
  try {
    const result = await pool.query(
      "SELECT * FROM support ORDER BY created_at DESC"
    )

    const rows = result.rows.map((row) => ({
      id: row.id,
      subject: row.user_message,
      user: row.user_name,
      status: row.is_read ? "Closed" : "Open",
      createdAt: new Date(row.created_at).toLocaleDateString()
    }))

    return Response.json(rows)  // 👈 must return Response.json()
  } catch (error) {
    console.error(error)
    return Response.json({ success: false, error: "Failed to fetch messages" }, { status: 500 })
  }
}