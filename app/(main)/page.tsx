import CategorySection from "@/components/CategorySection";
import Newslayout from "@/components/Newslayout";
import TrendingSection from "@/components/TrendingSection";
import { testItems } from "@/lib/testData";








export default async function Home() {

const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
const newsPosts = await res.json()


  return (
<main className="lg:ml-17 mx-auto">
<TrendingSection/>
<CategorySection sectionTitle="ტექ შეთავაზებები" database={newsPosts} category="tech"/>
<CategorySection sectionTitle="კონსოლის თამაშები" database={newsPosts} category="console"/>
<Newslayout sectionTitle="უახლესი ამბები" database={newsPosts} />
</main>
  );
}
 