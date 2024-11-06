import React from 'react'

const DarkNavbar = ({darkMode,setDarkMode}) => {
  return (
   <header className='p-2'>
    <nav className=' flex justify-between items-center  p-2'>
        <div><h2 className='font-sans font-extrabold res-70:text-[2.4rem] text-[1.3rem]'>Saim</h2></div>
        <ul className='flex items-center justify-center gap-5 res-70:gap-10'>
           <li>
            <a href="#">Home</a>
           </li>
           <li>
            <a href="#">Product</a>
           </li>
           <li>
            <a href="#">Pricing</a>
           </li>
           <li>
            <a href="#">Contact</a>
           </li>
        </ul>
        <div>
            <button className='py-2 px-3 rounded-md border-none outline-none bg-purple-800  shadow-slate-200 shadow-inner  text-white res-70:px-5 transition duration-[0.5s] hover:opacity-90 ' onClick={()=>setDarkMode(!darkMode)}>{darkMode ? 'Light' : 'Dark'}</button>
        </div>
    </nav>
   </header>
  )
}

export default DarkNavbar