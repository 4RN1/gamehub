
import pool from '@/lib/db'  // add this

export async function GET() {

try {
        const result = await pool.query('SELECT id, slug , image_url, title, tags, short_desc, post_content, category, created_at FROM newsposts WHERE slider_status = true ORDER BY created_at DESC ');
        return Response.json(result.rows)


} catch (error) {
    console.error("trending API error:", error)
    return Response.json({error: String(error)} , {status:500})
}


}