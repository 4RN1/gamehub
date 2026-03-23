import CategorySection from "@/components/CategorySection";
import Newslayout from "@/components/Newslayout";
import TrendingSection from "@/components/TrendingSection";
import { testItems } from "@/lib/testData";



export default function Home() {

  return (
<main>
<TrendingSection/>
<CategorySection sectionTitle="კონსოლის თამაშები" items={testItems}  category="console"/>
<CategorySection sectionTitle="კომპიუტერის თამაშები" items={testItems} category="pc"/>
<CategorySection sectionTitle="ტექ შეთავაზებები" items={testItems} category="tech"/>
<Newslayout sectionTitle="უახლესი ამბები" filters={['all' , 'games' , 'tech']}/>
</main>
  );
}
