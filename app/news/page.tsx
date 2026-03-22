
import Newslayout from "@/components/Newslayout"
import NewsTitleLayout from "@/components/NewsTitleLayout"
import TwoBigCardLayout from "@/components/TwoBigCardLayout"
import { gg } from "@/lib/testData"




const news = () => {
  return (
    <>

<section className=" max-w-325 mx-auto mb-5">

<NewsTitleLayout title = "ახალი ამბები"  desc = "ყველაფერი, რაც გეიმერს აინტერესებს — ახალი ამბები, ჭორები და ინფორმაცია პოპულარული თამაშების შესახებ."/>

<div className="mt-10">
<TwoBigCardLayout card={gg} />
</div> 


<Newslayout sectionTitle="უახლესი" filters={[ "all", "action" ,"role-playing" , "strategy" , "shooters", "simulator", "sports/racing", "multiplayer/coop","tech" ]}/>

</section>

    </>
  )
}

export default news
