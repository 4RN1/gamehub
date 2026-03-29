"use client"

import { Home, NewspaperIcon, FormInput } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiNotification } from "react-icons/bi";
import { MdAccountBox } from "react-icons/md";


const navLinks = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/news", icon: NewspaperIcon, label: "News" },
  { href: "/forum", icon: FormInput, label: "Forum" },
  { href: "/notifications", icon: BiNotification, label: "Notifications", isModal: true },
  { href: "/account", icon: MdAccountBox, label: "Account" },

]

const SideNavbar = () => {
  const pathname = usePathname()

  const hideNavbar =
    ["/login", "/registration"].includes(pathname) ||
    pathname.startsWith("/admin")

  if (hideNavbar) return null

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)
const [notificationsOpen, setNotificationsOpen] = useState(false)
  return (
    <>
      {/* Desktop sidebar */}
      <nav className="fixed top-0 left-0 bottom-0 w-17 bg-(--dark-background) border-r border-[#333] flex justify-center items-center max-lg:hidden z-40">
    
<ul className="flex flex-col items-center gap-3 py-4">
  {navLinks.map(({ href, icon: Icon, label, isModal }) => (
    <li key={href}>
      {isModal ? (
        <button
          onClick={() => setNotificationsOpen(true)}
          className="flex items-center justify-center p-3 rounded-lg transition-colors hover:bg-white/5"
          style={{ color: "#9ca3af" }}
        >
          <Icon size={25} />
        </button>
      ) : (
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
</ul>
      </nav>

      {/* Mobile bottom bar */}
      <nav className="fixed bottom-0 left-0 right-0 h-18 bg-(--dark-background) border-t border-[#333] flex items-center justify-around lg:hidden z-30">
        {navLinks.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center gap-1 transition-colors"
            style={isActive(href) ? { color: "white" } : { color: "#9ca3af" }}
          >
            <Icon size={22} />
            <span className="text-[12px]">{label}</span>
          

          </Link>
        ))}


          
      </nav>

   
      
    </>
  )
}

export default SideNavbar
