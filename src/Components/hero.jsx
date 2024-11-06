import React, { useState } from 'react'
import Navbar from './Navbar'
import Login from './Login'

const Hero = () => {
    const [showPopUp,setShowPopUp] = useState(false)
return (<>
<section className='text-white'>

<Navbar setShowPopUp={setShowPopUp} />
{showPopUp ? <Login setShowPopUp={setShowPopUp}/> :null}
    
<div className="w-full h-[80vh] flex justify-center items-center before:content-[''] before:w-[100%] before:h-[100%] before:absolute before:top-0 before:left-0 before:opacity-5befre before:bg-slate-900 before:-z-10">
<div className="flex flex-col items-center justify-center res-69:max-w-[700px] gap-5 px-5">
<h1 className= 'text-white text-[22px] res-300:text-[30px] res-69:text-[50px]  text-center '>Unlock the Power Of <span className='font-extrabold text-sky-400 animate-pulse'> Ai </span></h1>
<p className='text-white text-center res-69:text-[18px] text-[14px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum aperiam perspiciatis, debitis accusantium at officia, necessitatibus sint odit, impedit laudantium non in eligendi voluptatem! Dolores aliquam voluptatem magnam. Ipsum, similique?</p>
<button className='px-3 py-1  res-69:py-3 res-69:px-10 rounded bg-sky-700 border border-sky-700 transition duration-500 hover:bg-transparent hover:text-white '>Download Now</button>
</div>
</div>
</section>
</>
)
}

export default Hero