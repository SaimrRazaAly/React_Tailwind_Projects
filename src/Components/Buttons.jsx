import React from 'react'

const Buttons = () => {
  return (
    <>
    <div className='flex gap-[20px] w-full justify-center items-center translate-y-[50vh] text-white'>

   <button className='bg-sky-600 px-5 py-2 border border-sky-400 rounded-2xl transition hover:bg-sky-700 hover:-translate-x-5 hover:rounded-lg focus:animate-spin'>Primiry</button>
   <button className='bg-purple-600 px-5 py-2 border-none rounded transition hover:bg-purple-700 focus:animate-bounce'>Secondary</button>
   <button className='bg-rose-800 px-5 py-2 transition-all hover:translate-x-5 hover:bg-rose-900 hover:rounded-lg focus:animate-ping'>Danger</button>
    </div>
    </>
  )
}

export default Buttons