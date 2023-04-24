import React from 'react'

const Contactuser = () => {
  return (
    <div>
        <div className='flex flex-row gap-1 '>
            <input type="text" name="email" className=" basis-2/5 block w-full  p-3 rounded bg-gray-200 border border-transparent focus:outline-none" placeholder='Name'/>
            <input type="tel" name="email" className="block w-full  p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
        </div>
    </div>
  )
}

export default Contactuser