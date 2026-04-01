"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoGameController, IoSearch } from "react-icons/io5";

const Navbar = () => {


  return (
   <header className="sticky top-0 z-50 bg-(--dark-background)">
      <div className="py-2 border-b border-[#333] flex justify-center">
        <div className="flex items-center justify-between px-20 w-full max-sm:px-5 gap-6">

          {/* Logo */}
          <div className="shrink-0">
            <Link href="/">
              <h1 className="text-[30px] flex items-center gap-1">
                <IoGameController size={45} color="orange" />
                GAMEHUB
              </h1>
            </Link>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-xl relative max-sm:hidden">
            <IoSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search games..."
              className="w-full bg-white/5 border border-[#444] rounded-md pl-9 pr-4 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>

          {/* Sign In */}
          <div className="shrink-0">
            <Link
              href="/login"
              className="px-5 py-2 font-medium rounded text-black"
              style={{ backgroundColor: "orange" }}
            >
              Sign in
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
