import React, { useState } from "react";
import { FaqData } from "./faq";

const FAq = () => {
    const [faq,setFaq] =useState()

    function handelClick (id){
setFaq((pre)=> (pre == id ? null : id))
    }
  return (
    <center>
      <div>
        <h2>FAq Section</h2>
        {
            FaqData.map((v,i)=>{
                return(
                    <div key={i}>
                        <h2 onClick={()=>handelClick(v.id)}>{v.ques}</h2>
                        <p className={faq ==v.id ? 'bg-slate-600':'bg-red-400'}>{v.ans}</p>
                    </div>
                )
               
            })
        }
      </div>
    </center>
  );
};

export default FAq;
