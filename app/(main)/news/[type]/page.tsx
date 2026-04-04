import Newslayout from "@/components/Newslayout";
import NewsTitleLayout from "@/components/NewsTitleLayout";
import TwoBigCardLayout from "@/components/TwoBigCardLayout";
import { gg } from "@/lib/testData";

  

const page = async  ({params} : {params: {type:string}}) => {
  
  const {type} = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
const newsPosts = await res.json()

  
    return (
        
    <section className=" max-w-325 mx-auto mb-5">
      <NewsTitleLayout title={type}  desc = "ყველაფერი, რაც გეიმერს აინტერესებს — ახალი ამბები, ტექნიკა, ჭორები და ინფორმაცია პოპულარული თამაშების შესახებ." />

      <div className="mt-10">
        <TwoBigCardLayout card={gg} />
      </div> 


<Newslayout sectionTitle={type} database={newsPosts}/>
    </section>
  )
}

export default page
