import CategorySection from "@/components/CategorySection";
import Newslayout from "@/components/Newslayout";
import TrendingSection from "@/components/TrendingSection";
import { testItems } from "@/lib/testData";



export default function Home() {

  return (
<main>
<TrendingSection/>
<CategorySection sectionTitle="კონსოლის თამაშები" items={testItems} />
<CategorySection sectionTitle="კომპიუტერის თამაშები" items={testItems} />
<CategorySection sectionTitle="ტექ შეთავაზებები" items={testItems} />
<Newslayout sectionTitle="უახლესი ამბები" filters={['all' , 'games' , 'tech']}/>
</main>
  );
}
