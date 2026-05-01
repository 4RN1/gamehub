import pool from "@/lib/db";
import AdminNewsList from "@/components/adminComp/AdminNewsList";

export default async function NewsList() {
  // const [selected, setSelected] = useState<number[]>([]);

  // const toggle = (id: number) =>
  //   setSelected((prev) =>
  //     prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
  //   );
  const result = await pool.query(
    `SELECT * FROM newsposts ORDER BY created_at DESC`,
  );
  const news = result.rows;

  return (
    <AdminNewsList news={news}/>
  );
}
