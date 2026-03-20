import Newslayout from '@/components/Newslayout'
import UserProfile from '@/components/UserProfile'
import { userTestInfo } from '@/lib/testData'

import React from 'react'



const page = () => {
  return (
   <div>
   <UserProfile {...userTestInfo} />
   <Newslayout sectionTitle="აქტივობა" filters= {["all","your posts" , "favorites" , ]}/>
  </div>
  )
}

export default page
