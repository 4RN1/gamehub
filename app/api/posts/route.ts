import { Pool } from "pg";
import pool from '@/lib/db'  // add this

export async function GET() {

try {
        const result = await pool.query('SELECT id, title, slug, thumbnail, category_id, created_at FROM posts')
        return Response.json(result.rows)


} catch (error) {
    return Response.json({error: String(error)} , {status:500})
}


}