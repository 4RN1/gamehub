import React from 'react'


interface newsLayout  {
  title:string,
  desc:string,

  }


const NewsTitleLayout = ({title, desc} : newsLayout) => {
  return (
    <div className="border-b-2 py-8 max-sm:px-3">
<h2 className="mb-5 text-4xl font-bold max-sm:text-2xl uppercase">{title}</h2>
<p className="text-lg font-medium max-w-200 max-sm:text-sm">{desc}</p>
</div>
  )
}

export default NewsTitleLayout