"use client"

import { Home, NewspaperIcon, FormInput } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdAccountBox, MdOutlineSupportAgent } from "react-icons/md";
import SupportModal from "../support/SupportModal";


const navLinks = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/news", icon: NewspaperIcon, label: "News" },
  

]

const NavbarSidebar = () => {
  const pathname = usePathname()
  
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)


const [notificationsOpen, setNotificationsOpen] = useState(false)
const [isSupportOpen, setIsSupportOpen] = useState(false)

  const hideNavbar =
    ["/login", "/registration"].includes(pathname) ||
    pathname.startsWith("/admin")

  if (hideNavbar) return null

  return (
  
   <div className="">
      {/* Desktop sidebar */}
      <nav className="fixed top-0 left-0 bottom-0 w-17 bg-(--dark-background) border-r border-[#333] flex justify-center items-center max-lg:hidden z-40">
    
<ul className="flex flex-col items-center gap-5 py-4">
  {navLinks.map(({ href, icon: Icon, }) => (
    <li key={href}>
      {(
        <Link
          href={href}
          className="flex items-center justify-center p-3 rounded-lg transition-colors hover:bg-white/5"
          style={
            isActive(href)
              ? { backgroundColor: "white", color: "black" }
              : { color: "#9ca3af" }
          }
        >
          <Icon size={25} />
        </Link>
      )}
    </li>
  ))}

    <li className="flex items-center justify-center p-3 rounded-lg transition-colors text-[#9ca3af] hover:bg-white/5">
      <MdOutlineSupportAgent 
  size={25} 
  onClick={() => setIsSupportOpen(true)} 
/>
    </li>
</ul>
      </nav>

      {/* Mobile bottom bar */}
      <nav className="fixed bottom-0 left-0 right-0 h-18 bg-(--dark-background) border-t border-[#333] flex items-center justify-around lg:hidden z-30">
        {navLinks.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center gap-1 transition-colors"
            style={isActive(href) ? { color: "white" } : { color: "#9ca3af" }}>
            <Icon size={22} />
            <span className="text-[12px]">{label}</span>
          

          </Link>
        ))}


          
      </nav>

      <SupportModal 
  isOpen={isSupportOpen} 
  onClose={() => setIsSupportOpen(false)} 
/>
    </div>
  )
}

export default NavbarSidebar
