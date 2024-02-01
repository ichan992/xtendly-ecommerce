import { ChevronDownIcon,ChevronUpIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
export default function Filter({title, data, onSelect} ) {
  const [showFilter, setShowFilter] = useState(true)

  return (
    <div className='border-b-[0.5px] border-gray-200 pb-3 '>
      <button className='w-full' onClick={()=>setShowFilter((prev)=>!prev)} >
        <div className='flex flex-row justify-between'>
         <p className='font-semibold'>{title}</p>
        <div>
            {showFilter ? <ChevronDownIcon className="w-6 h-6 " /> : <ChevronUpIcon className="w-6 h-6 " />}
        </div>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300  ${
          showFilter ? 'block' : 'hidden'
        }`}
      >
        <div className='grid grid-cols-1 font-medium space-y-1'>  
          {data.map((data,index)=>(
            <div key={index}>
            <input onChange={()=>onSelect(data)}  type="radio" value={data} name={title} /> {data}
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}
