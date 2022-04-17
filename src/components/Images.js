import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { imagesObj } from "../utils/imageArray";
import Navbar from "./Navbar";

function Images() {
  const [value, setValue] = useState("");
  const [chunkArr, setChunkArr] = useState([]);
  const [charArr, setCharArr] = useState([]);

  // console.log(chunkArr[1].split(""));

  const handleConvert = () => {
    if (value) {
      const arr = value.split(" ");
      setChunkArr(arr);
    } else {
      alert("Please insert value");
    }
  };

  return (
    <div>
      <Navbar/> 
      
      <div className="flex justify-center">
      
        <div className="w-[400px] my-3">
        <NavLink to={'/'} className="w-full flex justify-center"><img src={logo} className="w-44" alt="" /></NavLink>
        <h1 className="text-center font-bold my-5">বাংলা --> ইশারা ভাষা </h1>
          <textarea
            type="textarea"
            value={value}
            className="border"
            rows="4"
            cols="50"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            onClick={handleConvert}
            className="py-1 px-6 bg-blue-600 text-white"
          >
            রূপান্তর
          </button>
          <button
            onClick={() => {
              setValue("");
              setChunkArr([]);
            }}
            className="py-1 px-6 bg-red-600 text-white ml-4"
          >
            ক্লিয়ার
          </button>
        </div>
      </div>
      <div className="my-3 flex justify-center">
        <div className="mx-8">
          {chunkArr && chunkArr.length
            ? chunkArr.map((chunk) => {
                return (
                  <div className="border grid grid-cols-2 my-2 gap-x-4 gap-y-3">
                    <div className=" flex justify-center items-center">
                      <p>{chunk}</p>
                    </div>
                    <div className="flex  ">
                      {chunk.split("").map((char) => {
                        return (
                          <div className="px-5">
                            {" "}
                            {/* <p className="text-xl font-bold">{char}</p> */}
                            <img
                              src={imagesObj[char + ""]}
                              alt={char}
                              // srcset=""
                              className="w-[120px]"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default Images;
