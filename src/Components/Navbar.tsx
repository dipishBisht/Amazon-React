import Amazon_Logo from "../assets/Amazon_Logo.png";
import flag from "../assets//fe2UeLQmJ11kKHN.png";


const Navbar = () => {
  return (
    <div className="bg-[#131921] text-white flex justify-center gap-6 p-2">
      <div className="text-white w-[110px] h-[50px] flex items-center">
        <img
          src={Amazon_Logo}
          alt="Amazon Logo"
          className="w-full h-full object-contain"
        />
        <span>.in</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-white">
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
        <p className="flex flex-col">
          <span className="text-sm text-[#ccc]">
            Delivering to Delhi 110001
          </span>
          <span className="font-bold">Update location</span>
        </p>
      </div>
      <div className="flex h-10 my-auto">
        <select className="text-black bg-[#ccc] text-xs px-1 rounded-s-sm">
          <option>All</option>
        </select>
        <input
          type="search"
          className="w-[400px] pl-2"
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
      <div className="flex justify-center gap-6">
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
      <div className="flex flex-col">
        <p className="text-xs">Hello, sign in</p>
        <p className="font-bold">Account & Lists</p>
      </div>
      <div className="flex flex-col">
        <p className="text-xs">Returns</p>
        <p className="font-bold">& Orders</p>
      </div>
      <div className="font-bold flex items-center">
        <p className="relative">
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
        </p>
        <p>
          Cart &nbsp;(<span className="text-[#f08804]">0</span>)
        </p>
      </div>
    </div>
  );
};

export default Navbar;
