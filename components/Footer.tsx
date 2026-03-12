"use client";
import Link from 'next/link'
import React from 'react'

import { usePathname } from "next/navigation";


const Footer = () => {
const pathname = usePathname();
  const hideFooter = ["/login", "/registration"].includes(pathname);

  if (hideFooter) return null;

  return (



    <footer className='bg-(--dark-background) border-t border-[#333]'>
      <div className='grid grid-cols-3 gap-8 px-8 py-12 max-sm:grid-cols-1 '>

        <div>
          <h2 className='text-4xl font-medium'>GAMEHUB</h2>
          <p className='text-sm text-gray-400'>სიახლეები, დისკუსიები და თამაშები — ყველაფერი ერთ ადგილას.</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-base font-semibold mb-1'>ნავიგაცია</h3>
          <Link href="/">მთავარი</Link>
          <Link href="/news">ახალი ამბები</Link>
          <Link href="/forum">ფორუმი</Link>
          <Link href="/account">ანგარიში</Link>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-base font-semibold mb-1'>სამართლებრივი</h3>
          <Link href="/terms">წესები და პირობები</Link>
          <Link href="/privacy">კონფიდენციალურობა</Link>
        </div>

      </div>

      <div className='text-center text-xs text-gray-500 py-4 border-t border-gray-800'>
        © 2025 GameHub. ყველა უფლება დაცულია.
      </div>
    </footer>
  )
}

export default Footer