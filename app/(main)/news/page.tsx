
import Newslayout from "@/components/Newslayout"
import NewsTitleLayout from "@/components/NewsTitleLayout"
import TwoBigCardLayout from "@/components/TwoBigCardLayout"
import { gg } from "@/lib/testData"




const news = async () => {

  
const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
const newsPosts = await res.json()


  return (
    <>

<section className="lg:ml-33 max-w-420  mb-5 px-5">

<NewsTitleLayout title = "ახალი ამბები"  desc = "ყველაფერი, რაც გეიმერს აინტერესებს — ახალი ამბები, ტექნიკა, ჭორები და ინფორმაცია პოპულარული თამაშების შესახებ."/>

<div className="mt-10">
<TwoBigCardLayout card={gg} />
</div> 


<Newslayout sectionTitle="უახლესი" database={newsPosts}/>

</section>

    </>
  )
}

export default news
