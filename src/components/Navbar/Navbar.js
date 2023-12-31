import { useState } from "react";
import Fetch from "../Fetch/Fetch";

function Navbar() {
  const [tag, setTag] = useState("all");

  return (
    <>
      <nav className="navbar bg-[#323334]">
        <div className="navHeader flex flex-wrap justify-around py-5">
          <h1 className="text-[white] text-2xl flex font-bold font-mono">
            N<p className="text-[red]">ew</p>s Z<p className="text-[red]">on</p>
            e
          </h1>
          <form action="get">
            <input
              className="rounded-lg text-white border-2 border-[red] px-[0.5rem] py-[0.15rem] bg-[#323334]"
              type="text"
              placeholder="Search Author..."
            />
          </form>
        </div>
        <div className="tags">
          <ul className="flex justify-center text-[white] mx-1">
            <li
              className="mx-3 my-2 rounded px-[0.65rem] py-[0.15rem] cursor-pointer bg-[#ff4343]"
              onClick={() => setTag("all")}
            >
              All
            </li>
            <li
              className="mx-3 my-2 rounded px-[0.65rem] py-[0.15rem] cursor-pointer bg-[#ff4343]"
              onClick={() => setTag("technology")}
            >
              Technology
            </li>
            <li
              className="mx-3 my-2 rounded px-[0.65rem] py-[0.15rem] cursor-pointer bg-[#ff4343]"
              onClick={() => setTag("weather")}
            >
              Weather
            </li>
            <li
              className="mx-3 my-2 rounded px-[0.65rem] py-[0.15rem] cursor-pointer bg-[#ff4343]"
              onClick={() => setTag("sports")}
            >
              Sports
            </li>
          </ul>
        </div>
      </nav>
      <Fetch tag={tag} />
    </>
  );
}
export default Navbar;
