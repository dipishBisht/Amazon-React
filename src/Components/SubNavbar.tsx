import { subNavbarList } from "../Utils/Utilities";

const SubNavbar = () => {

  return (
    <div className="text-white bg-[#232f3e] py-2 pl-3">
      <div className="flex justify-between w-11/12 text-sm gap-1">
        {subNavbarList.map((val, ind) => (
          <h1 key={ind}>
            {ind === 0 ? (
              <section className="flex gap-2 items-center min-w-12">
                <span>
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
                </span>
                <span>{val}</span>
              </section>
            ) : ( 
              <span className="hidden lg:block" >{val}</span>
            )}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default SubNavbar;
