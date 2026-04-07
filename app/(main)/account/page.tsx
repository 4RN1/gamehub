import Newslayout from '@/components/Newslayout'
import UserProfile from '@/components/UserProfile'
import { threadData, userTestInfo } from '@/lib/testData'

import React from 'react'



const page = () => {
  return (
  <main className="lg:ml-17 mx-auto">
   <UserProfile {...userTestInfo} />
  


  </main>
  )
}

export default page
