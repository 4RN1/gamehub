"use client"
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'


export default function BackButton() {
  const router = useRouter()
  return <button onClick={() => router.back()} className='bg-[#313131] rounded-full p-1.5 hover:bg-[#4b4949] cursor-pointer max-sm:hidden'> <ArrowLeft/></button>
}