import Amazon_Logo from "../assets/Amazon_Logo.png";
import flag from "../assets//fe2UeLQmJ11kKHN.png";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    console.log("clicked");
    setNav(!nav);
  };

  const navStyle = {
    right: nav ? "0px" : "-200px",
    position: "fixed" as "fixed",
    transition: "right 0.3s ease",
    
  };

  return (
    <div className="relative bg-[#131921] text-white flex justify-between items-center gap-4 py-2 px-3 max-w-[1350px] mx-auto overflow-x-hidden">
      <div className="text-white h-[50px] w-[130px] flex items-center">
        <img
          src={Amazon_Logo}
          alt="Amazon Logo"
          className="w-full h-full object-contain"
        />
        <span>.in</span>
      </div>
      <div
        className="flex gap-5 absolute flex-col top-16 h-[99vh] bg-[#131921] items-start w-fit px-5 py-4 lg:static lg:flex-row lg:w-full lg:h-auto lg:justify-center"
        style={navStyle}
      >
        <div className="items-center gap-1 lg:flex">
          <section className="flex flex-col gap-0.5">
            <span className="text-xs text-[#ccc]">
              Delivering to Delhi 110001
            </span>
            <p className="font-bold text-sm flex lg:justify-end">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1.2em"
                  width="1.2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke=""
                    strokeWidth="2"
                    d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"
                  ></path>
                </svg>
              </span>
              <span>Update location</span>
            </p>
          </section>
        </div>
        <div className="h-10 my-auto lg:flex flex-1 max-w-[550px] hidden">
          <select className="text-black bg-[#e6e6e6] text-xs px-1 rounded-s-sm">
            <option>All</option>
          </select>
          <input
            type="search"
            className="pl-2 w-full"
            placeholder="Search Amazon.in"
          />
          <button className="bg-[#febd69] w-10 flex justify-center items-center rounded-e-sm">
            <svg
              stroke="#131921"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
        <div className="justify-center gap-6 lg:flex">
          <div className="flex items-center">
            <div
              className="h-[18px] w-[24px] "
              style={{
                backgroundImage: `url(${flag})`,
                backgroundPosition: "0 -166px",
              }}
            ></div>
            <select className="bg-transparent">
              <option>EN</option>
            </select>
          </div>
        </div>
        <div className="flex-col lg:flex">
          <p className="text-xs">Hello, sign in</p>
          <p className="font-bold">Account & Lists</p>
        </div>
        <div className="flex-col lg:flex">
          <p className="text-xs">Returns</p>
          <p className="font-bold">& Orders</p>
        </div>
      </div>
      <div className="font-bold flex items-center gap-4 text-sm sm:text-lg">
        <section className="flex items-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.822,7.431C21.635,7.161,21.328,7,21,7H7.333L6.179,4.23C5.867,3.482,5.143,3,4.333,3H2v2h2.333l4.744,11.385 C9.232,16.757,9.596,17,10,17h8c0.417,0,0.79-0.259,0.937-0.648l3-8C22.052,8.044,22.009,7.7,21.822,7.431z M17.307,15h-6.64 l-2.5-6h11.39L17.307,15z"></path>
            <circle cx="10.5" cy="19.5" r="1.5"></circle>
            <circle cx="17.5" cy="19.5" r="1.5"></circle>
          </svg>
          <p className="flex items-center gap-1">
            <span>Cart</span>
            <span className="text-[#f08804]">(0)</span>
          </p>
        </section>
        <div className="lg:hidden" onClick={handleNav}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
