import React from "react";
import { imagesObj } from "../utils/imageArray";
import Navbar from "./Navbar";

function Dictionary() {
  var output = Object.entries(imagesObj).map(([key, value]) => ({
    key,
    value,
  }));

  console.log(output);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-6 gap-x-4 gap-y-3 px-4 py-2">
       {output && output.length ? output.map(item => {
           return <div>
           <p>{item.key}</p>
           <img src={item.value} alt={item.key} className="w-72" />
           </div>
       }):''}
      </div>
    </div>
  );
}

export default Dictionary;
