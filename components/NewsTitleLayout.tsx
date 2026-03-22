import React from 'react'


interface newsLayout  {
  title:string,
  desc:string,

  }


const NewsTitleLayout = ({title, desc} : newsLayout) => {
  return (
    <div className="border-b-2 py-8">
<h2 className="mb-5 text-4xl font-bold">{title}</h2>
<p className="text-lg font-medium max-w-200">{desc}</p>
</div>
  )
}

export default NewsTitleLayout