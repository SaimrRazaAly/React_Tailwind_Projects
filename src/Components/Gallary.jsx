import React from "react";

const Gallary = () => {
  return (
    <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
      <div>
        <img src="/mountains-1.jpg" alt="" loading="lazy" />
      </div>
      <div class="col-start-3">
        <img src="/mountains-2.jpg" alt="" loading="lazy" />
      </div>
      <div>
        <img src="/mountains-3.jpg" alt="" loading="lazy" />
      </div>
      <div>
        <img src="/mountains-4.jpg" alt="" loading="lazy" />
      </div>
      <div class="row-start-1 col-start-2 col-span-2">
        <img src="/mountains-5.jpg" alt="" loading="lazy" />
      </div>
    </div>
  );
};

export default Gallary;
