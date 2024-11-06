import React from "react";


const Pricing = () => {
  return (
    <section>
      <div>
        <h2 className="text-[30px] text-center font-extrabold">OUR PLAN</h2>
      </div>
    


    <div className="bg-sky-700 text-center max-w-[300px] m-auto rounded-lg">
      <div>

        <div><h2 className="text-[34px] font-extrabold text-white">Basic</h2></div>
        <div className="flex justify-center items-center"><h1 className="text-[30px] text-white font-bold">$99</h1><sub className=" text-white font-mono">/month</sub></div>
        <div className="flex flex-col gap-5">

        <div className="flex  items-center gap-5 ml-4 mb">
            <div className="w-3 h-3 bg-sky-400 rounded"></div>
           <p> 8gb</p>
        </div>
        </div>
      </div>
        <button>Buy Now</button>
      </div>
  
 
    </section>
  );
};

export default Pricing;
