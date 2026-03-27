"use client";
import Link from "next/link";
import AvatarIcon from "./AvatarSvgIcon";
import { usePathname } from "next/navigation";
import { IoGameController } from "react-icons/io5";

const Navbar = () => {
const pathname = usePathname();
  const hideNavbar = ["/login", "/registration"].includes(pathname) || pathname.startsWith("/admin")

  if (hideNavbar) return null;

  return (
    <header className="bg-(--dark-background)">
      <div className="py-2 border-b border-[#333] flex justify-center ">
        {/* logo */}
        <div className=" flex items-center justify-between px-20 w-full  max-w-375 max-sm:px-5">
        <div >
          <Link href="/" >
            <h1 className="text-[30px] flex items-center gap-1"><IoGameController size={45} color="orange"/>GAMEHUB</h1>
          </Link>
        </div>

        <div>
            {/*ანგარიშის icon */}
           <Link href="/account"> <AvatarIcon /></Link>
        </div>

        </div>
        
      </div>
   <nav className="py-3">
  <div className="flex justify-center">
    <ul className="flex items-center gap-8">
      <li>
        <Link href="/news" className="nav-link">
          ახალი ამბები
   
        </Link>
      </li>
     |
      <li>
        <Link href="/forum" className="nav-link">
          ფორუმი
  
        </Link>
      </li>
     {/* | */}
      {/* <li>
        <Link href="/trending" className="nav-link">
          Tips/Guides
  
        </Link>
      </li> */}
    </ul>
  </div>
</nav>
    </header>
  );
};

export default Navbar;
