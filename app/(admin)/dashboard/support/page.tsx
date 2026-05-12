import pool from "@/lib/db"
import SupportList from '@/components/support/SupportPage'

export default async function page() {
  const result = await pool.query("SELECT * FROM support ORDER BY created_at DESC")
  const tickets = result.rows;

  return (
    <div>
      <SupportList database={tickets}  />
    </div>
  )
}