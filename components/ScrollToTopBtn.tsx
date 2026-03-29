'use client'
import { useEffect, useState } from "react"
import { BiUpArrow } from "react-icons/bi"





const ScrollToTopBtn = () => {

    const [visible, setVisible] = useState(false)


useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener("scroll" , toggleVisibility)
} , [])

  return   (

   <div
    className={`fixed bottom-5 right-5 z-50 cursor-pointer transition-all duration-400 p-3 bg-black rounded-full
      ${visible ? 'opacity-100 translate-y-0 max-sm:-translate-y-15' : 'opacity-0 translate-y-10 pointer-events-none'}
    `}
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    <BiUpArrow className="text-2xl" />
  </div>
  )
}

export default ScrollToTopBtn