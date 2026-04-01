import Link from "next/link"


export default function NotFound() {
    



  return (
   <div className="h-screen bg-[url(/assets/bg.jpg)] bg-cover bg-center  bg-no-repeat flex flex-col justify-center items-center">
<div className="z-50 flex flex-col items-center bg-zinc-800 px-5 py-5 rounded-3xl">
        <h1 className="text-[80px] md:text-[100px] lg:text-[130px]">404</h1>
        <h2 className="text-[30px] md:text-[40px] lg:text-[60px]">გვერდი ვერ მოიძებნა</h2>
        <Link href='/' className="mt-10 px-5 py-2.5 bg-[#29a395] rounded-lg hover:bg-[#2f978b] max-sm:mt-4">მთავარ გვერდზე დაბრუნება</Link>
        </div>
<div className="inset-0 bg-black/20 h-full w-full absolute" />
    </div>
  )
}