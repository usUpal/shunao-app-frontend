import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Dashboard() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="w-[400px] text-center">
        <div className="flex justify-center">
          {/* <h2 className="text-2xl font-bold my-3">SHUNAP APP</h2> */}
          <img src={logo} className="w-44" alt="" />
        </div>
        <h1 className="text-2xl font-bold my-4">Welcome to SHUNAO App</h1>
        <NavLink
          className={"border border-blue-400 px-6 py-3 block my-2 font-bold"}
          to={"/images"}
        >
          Characterwise Sign Language Detection
        </NavLink>
        <NavLink
          className={"border border-blue-400 px-6 py-3 block my-2 font-bold"}
          to={"/sign-detect"}
        >
          Realtime Sign Language Detection
        </NavLink>
        <NavLink
          className={"border border-blue-400 px-6 py-3 block my-2 font-bold"}
          to={"/bangla-production"}
        >
          Bangla Sign Language Production
        </NavLink>
        <NavLink
          className={"border border-blue-400 px-6 py-3 block my-2 font-bold"}
          to={"/dictionary"}
        >
          Dictionary
        </NavLink>
      </div>
    </div>
  );
}

export default Dashboard;
