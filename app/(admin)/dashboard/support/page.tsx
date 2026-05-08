import pool from "@/lib/db"
import SupportList from '@/components/support/SupportPage'

export default async function page() {
  const result = await pool.query("SELECT * FROM support ORDER BY created_at DESC")
  const tickets = result.rows.map((row) => ({
    id: row.id,
    subject: row.user_message,
    user: row.user_name,
    status: row.is_read ? "Closed" : "Open",
    createdAt: new Date(row.created_at).toLocaleDateString()
  }))

  return (
    <div>
      <SupportList tickets={tickets} />
    </div>
  )
}