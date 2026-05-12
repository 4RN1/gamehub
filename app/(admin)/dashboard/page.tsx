import pool from '@/lib/db'
import AdminDashboard from '@/components/adminComp/AdminDashboard'

export default async function Dashboard() {
  const newsCountResult = await pool.query("SELECT COUNT(*) FROM newsposts")
  const supportCountResult =  await pool.query("SELECT COUNT(*) FROM support")
  const resolvedSupportCount = await pool.query("SELECT COUNT(*) FROM support WHERE resolved = true");
  const recentNewsList = await pool.query(`SELECT * FROM newsposts ORDER BY created_at DESC`);
  const recentMsgList = await pool.query(`SELECT * FROM support ORDER BY created_at DESC`)



  const newsCount = Number(newsCountResult.rows[0].count)
  const supportCount = Number(supportCountResult.rows[0].count)  
  const resolvedMsg = Number(resolvedSupportCount.rows[0].count)  
  const recentNews = recentNewsList.rows;
  const recentMsg = recentMsgList.rows

  return (
    <>
      <AdminDashboard newsCount={newsCount} supportCount={supportCount} resolvedMsgCount={resolvedMsg} recentMessages={recentMsg} recentNews={recentNews}/>
    </>
  )
}