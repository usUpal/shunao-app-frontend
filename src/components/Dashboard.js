import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Navbar from "./Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center h-[100vh]">
        <div className="w-[400px] text-center">
          <div className="flex justify-center">
            {/* <h2 className="text-2xl font-bold my-3">SHUNAP APP</h2> */}
            <img src={logo} className="w-44" alt="" />
          </div>
          <h1 className="text-2xl font-bold my-4">শুনাও এপে আপনাকে স্বাগতম</h1>
          <NavLink
            className={"border border-blue-900 px-6 py-3 block my-2 font-bold"}
            to={"/character-wise"}
          >
            Characterwise ইশারা ভাষা Detection
          </NavLink>
          <NavLink
            className={"border border-blue-900 px-6 py-3 block my-2 font-bold"}
            to={"/sign-detect"}
          >
            Realtime ইশারা ভাষা Detection
          </NavLink>
          <NavLink
            className={"border border-blue-900 px-6 py-3 block my-2 font-bold"}
            to={"/bangla-production"}
          >
            Bangla Sign Language Production
          </NavLink>
          <NavLink
            className={"border border-blue-900 px-6 py-3 block my-2 font-bold"}
            to={"/dictionary"}
          >
            বাংলা ইশারা ভাষা লিপি
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
