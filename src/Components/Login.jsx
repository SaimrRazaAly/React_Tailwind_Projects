import React, { useState } from "react";

const Login = ({setShowPopUp}) => {
    const [currentForm,setCurrentForm]= useState('Login')
  return (
<div className="login-container text-black ">
    <form action="" className=" max-w-[300px] res-69:max-w-[350px] bg-white py-5 px-3 rounded">
      <div className="flex justify-between px-6  ">
        <h2 className="text-[30px] font-bold">{currentForm}</h2>
        <button onClick={()=>setShowPopUp(false)} className='text-2xl' >X</button>
      </div>

      {/* all the inpiuts will come */}
      <div className="flex flex-col gap-3 mt-4">
   {currentForm==='Login' ? <></> :  <input type="text" placeholder='Enter your name' required className="input-css" />}
        <input type="email" placeholder='Enter your email' required  className="input-css"/>
        <input type="password" placeholder='Enter your password' required className="input-css" />
      </div>
      {/* <button className='text-sky-700 my-4 ml-4 '>{currentForm==='Sign Up' ? "create auccount?" :'Already have auccount?' }</button> */}
      <div className="flex gap-4 items-center justify-center my-5">
        <input type="checkbox" required/>
        <p>by contuning, i agree the terms of use & privacy policy</p>
      </div>
      {currentForm==='Login'?
       <p>Create a new account ? <span onClick={()=> setCurrentForm('Sign Up')} className='switch-btn'>Click Here</span></p>
        :<p>Already have an account ? <span onClick={()=> setCurrentForm('Login')} className='switch-btn'>Login</span></p>
    }
      
    </form>
  </div>  );
};

export default Login;
