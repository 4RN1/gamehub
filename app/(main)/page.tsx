import pool from "@/lib/db"
import Newslayout from "@/components/Newslayout"
import TrendingSection from "@/components/TrendingSection"
import FourCardsNews from "@/components/FourCardsNews"


export const revalidate = 0 

export default async function Home() {
  const trendingResult = await pool.query(
    'SELECT id, slug, image_url, title, tags, short_desc, post_content, category, created_at FROM newsposts WHERE slider_status = true AND featured_status = false ORDER BY created_at DESC'
  )
  const newsResult = await pool.query(
    'SELECT id, slug, image_url, title, tags, short_desc, post_content, category, created_at FROM newsposts WHERE slider_status = false AND featured_status = false ORDER BY created_at DESC'
  )
 const fourCardNews = await pool.query(
    'SELECT id, slug, image_url, title, tags, short_desc, post_content, category, created_at FROM newsposts WHERE slider_status = false AND featured_status = true ORDER BY created_at DESC'
  )
  

  return (
    <main className="lg:ml-17">
      <TrendingSection database={trendingResult.rows}/>
      <FourCardsNews database={fourCardNews.rows} />
      <Newslayout sectionTitle="უახლესი ამბები" database={newsResult.rows}/>
    </main>
  )
}