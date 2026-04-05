'use client'

import { copyToClipboard } from '@/app/actions/copyurl'
import { Copy } from 'lucide-react'


const CopyToClipboardButton = ({ slug }: { slug: string }) => {



  return (
      <button onClick={() => copyToClipboard(`http://localhost:3000/news/${slug}`)} className="border border-gray-200 hover:border-green-500 hover:text-green-500 text-gray-400 rounded-md w-15 h-7 flex items-center justify-center transition-colors">
                      <Copy size={13} />
                    </button>
  )
}

export default CopyToClipboardButton
