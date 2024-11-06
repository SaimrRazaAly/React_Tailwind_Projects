import React, { useState } from 'react'
import DarkNavbar from './DarkComponents/DarkNavbar'
import DarkHero from './DarkComponents/DarkHero'
import DarkProduct from './DarkComponents/DarkProduct'

const PageDark = () => {
    const [darkMode,setDarkMode] = useState(false)
  return (
    <div className={` w-full min-h-screen transition duration-500 ${darkMode ? 'text-white bg-slate-800 duration-400' :'text-black bg-white'} `}>
<DarkNavbar darkMode={darkMode} setDarkMode={setDarkMode}/>
<DarkHero/>
<DarkProduct/>
    </div>
  )
}

export default PageDark