
import Newslayout from "@/components/Newslayout";
import TrendingSection from "@/components/TrendingSection";









export default async function Home() {

const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/trending`);
const newsres = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);

const trending = await res.json()
const news = await newsres.json()


  return (
<main className="lg:ml-17 ">
<TrendingSection database={trending}/>
<Newslayout sectionTitle="უახლესი ამბები" database={news} />

</main>
  );
}
 