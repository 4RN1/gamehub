import CategorySection from "@/components/CategorySection";
import TrendingSection from "@/components/TrendingSection";

const testItems = [
  {
    id: 1,
    date: "10.03.2026",
    title: "GTA 6-ის გამოსვლის თარიღი ცნობილია",
  
    img: "/assets/test1.jpg"
  },
  {
    id: 2,
    date: "9.03.2026",
    title: "PS 6-ის მახასიათებლები ცნობილია ",
  
    img: "/assets/test2.webp"
  },
  {
    id: 3,
    date: "8.03.2026",
    title: "Elden Ring-ის ახალი DLC გამოცხადდა",
 
    img: "/assets/test7.webp"
  },
  {
    id: 4,
    date: "7.03.2026",
    title: "Nintendo Switch 2 გაიყიდება 2026 წლის აპრილში",
    
    img: "/assets/test4.jpg"
  },
  {
    id: 5,
    date: "6.03.2026",
    title: "Call of Duty ახალი სეზონი დღეს დაიწყო",
    
    img: "/assets/test5.avif"
  }
]

export default function Home() {

  return (
<main>
<TrendingSection/>
<CategorySection sectionTitle="კონსოლის თამაშები" items={testItems} />
<CategorySection sectionTitle="კომპიუტერის თამაშები" items={testItems} />
<CategorySection sectionTitle="ტექ შეთავაზებები" items={testItems} />

</main>
  );
}
