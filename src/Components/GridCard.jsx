import React from "react";
import Card from './card'
const GridCard = () => {
  return (
    <>
      <center>
        <h2>GridCard</h2>
      </center>
        <div className=" grid res-600:grid-cols-2 res-70:grid-cols-2 res-1000:grid-cols-3 gap-5 ">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
    
    </>
  );
};

export default GridCard;
