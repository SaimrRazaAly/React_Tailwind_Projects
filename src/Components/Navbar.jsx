import React, { useState } from "react";

const Navbar = ({setShowPopUp}) => {
  const [mobile, setmobile] = useState(false);
  return (
    <nav className="w-full flex justify-between items-center py-5 px-10">
      <div className="text-[30px] font-mono font-extrabold text-sky-700">
        Logo
      </div>
      <ul
        className={` z-10  pt-2 res-70:flex res-70:flex-row res-70:mr-0 res-70:bg-transparent res-70:relative res-70:top-0 gap-[20px] transition duration-1000 res-30 res-69 ${
          mobile === true ? "res-69:mr-0 res-30:mr-0" : "res-69:-mr-[500px] res-30:-mr-[500px]"
        }`}
      >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">team</a>
        </li>
        <li>
          <a href="#">contact us</a>
        </li>
      </ul>
      <div>
        <button onClick={()=>setShowPopUp(true)}
          className="bg-sky-600 border-none rounded transition hover:bg-sky-700 focus:animate-bounce 
    res-69:px-3 res-69:py-2 res-70:px-5 res-70:py-2 "
        >
   Login
        </button>
      </div>
      <span
        className="res-70:hidden res-69:block text-3xl"
        onClick={() => setmobile(!mobile)}
      >
        =
      </span>
    </nav>
  );
};

export default Navbar;
