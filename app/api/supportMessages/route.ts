"use server"
import pool from '@/lib/db'  // add this

 export async function getSupportMessage() {
    
    try {
            const result = await pool.query(
        "SELECT * FROM support ORDER BY created_at DESC"
    )

    return result.rows.map((row) => ({
        id: row.id,
        subject: row.user_message,
        user: row.user_name,
        status: row.is_read ? "Closed" : "Open",
        createdAt: new Date(row.created_at).toLocaleDateString()
    }))
        
    } catch (error) {
            console.error(error)
    return { success: false, error: "Failed to fetch messages" }
    }

 }