import React from 'react'
import CardImg from '../asserts/card.png'
const Card = () => {
  return (
    <>
    <div className='px-2 py-4 res-30:max-w-[300px] res-69:max-w-[300px]  bg-slate-400 res-70:max-w-[400px]  mt-5 rounded-xl m-auto flex flex-col items-center justify-center transition hover:rotate-3 '>
        <div className='max-w-[300px] flex items-center'>
            <img src={CardImg} alt="" className='w-[100%] rounded-2xl '/>
        </div>
        <h2 className='text-[24px] font-extrabold my-3 '>Chicken Salad</h2>
        <p className='font-light leading-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ex?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ex?</p>
        <div className='flex gap-5 items-center justify-center'>
            <button className='mt-6 rounded-full px-5 py-2 bg bg-purple-700 transition hover:scale-110'>But now</button>
            <button className='mt-6 rounded-full px-5 py-2 bg bg-purple-700 transition hover:scale-105 animate-pulse'>order Now</button>
        </div>
    </div>
    </>
  )
}

export default Card