'use client'

import { MoreHorizontal, Pencil, Trash } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const PostMenu = () => {
  const [active, setActive] = useState(false);
  

  return (
    <div className='relative'>
      <button
        onClick={() => setActive(prev => !prev)}
        className='flex items-center justify-center w-8 h-8 rounded-full text-gray-300 hover:text-gray-200 hover:bg-gray-700 transition-colors cursor-pointer'
      >
        <MoreHorizontal size={18} />
      </button>

      {active && (
        <div className='absolute right-0 top-9 z-50 w-44 bg-[#1a1a1b] border border-gray-700 rounded-md shadow-lg overflow-hidden '>
          <button
            onClick={() => setActive(false)}
            className='w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors cursor-pointer'
          >
            <Pencil size={15} />
            Edit post
          </button>
          <button
            onClick={() => setActive(false)}
            className='w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-gray-700 transition-colors cursor-pointer'
          >
            <Trash size={15} />
            Delete post
          </button>
        </div>
      )}
    </div>
  );
};

export default PostMenu;