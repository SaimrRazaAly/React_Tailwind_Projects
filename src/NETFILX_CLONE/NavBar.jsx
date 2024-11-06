import React, { useState, useEffect } from "react";

const Navbar = () => {
const [menu, setMenu] = useState(false);
const [navbarBg, setNavbarBg] = useState(false);

useEffect(() => {
function handelScroll() {
if(window.scrollY > 150 && !menu){
setNavbarBg(true)
}
else{
setNavbarBg(false)
} 
}

window.addEventListener("scroll", handelScroll);
})

return (
<nav className={`flex justify-between items-center px-5 py-0 mt-3 text-white transtion duration-300 z-50 ${navbarBg && !menu ? 'bg-white py-5 text-black sticky top-[0.1px] border-b border-black' : 'bg-transparent'}`}>
<div>
<button className={`nav-media-icons ${navbarBg && !menu ? ' text-black border-black' : 'bg-transparent'} `}></button>
<button className={`nav-media-icons  ${navbarBg && !menu ? ' text-black border-black' : 'bg-transparent'}`}></button>
<button className={`nav-media-icons  ${navbarBg && !menu ? ' text-black border-black' : 'bg-transparent'}`}></button>
</div>
<ul className={`z-10 gap-10 ${menu ? "show-menu hide-menu  " : "hidden   xl:flex-row xl:flex  xl:gap-5"} ${navbarBg ? 'text-black' : 'text-white'}`}>
<button
className="fixed right-3 text-[30px] xl:hidden"
onClick={() => setMenu(false)}
>
X
</button>
<li>
<a href="#" className="nav-a">
HOME
</a>
</li>
<li>
<a href="#" className="nav-a">
ABOUT US
</a>
</li>
<li>
<a href="#" className="nav-a">
DESTINATION
</a>
</li>
<li>
<a href="#" className="nav-a">
PAKAGES
</a>
</li>
<li>
<a href="#" className="nav-a">
PAKAGES
</a>
</li>
<li>
<a href="#" className="nav-a">
GALLARY
</a>
</li>
<li>
<a href="#" className="nav-a">
CONTACT US
</a>
</li>
</ul>
<button className="nav-btn">
Book Now
</button>
<button onClick={() => setMenu(true)} className={`xl:hidden text-[20px] md:text-[30px] font-extrabold  border-2 md:border-[3px] px-3 mb-1 border-[#588cd0] rounded-full ${navbarBg && !menu ? ' text-black' : 'bg-transparent'}`}>=</button>
</nav>
);
};

export default Navbar;
