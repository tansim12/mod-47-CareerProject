import { NavLink } from "react-router-dom";

const Navbar = () => {
  const itemsRoutes = (
    <>
      <li>
        <NavLink to={"/"}>Statistics</NavLink>
      </li>
      <li className="my-1 lg:my-0 lg:mx-3">
        <NavLink to={"/appliedJob"}>Applied Jobs</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  text-black bg-base-100 rounded-box my-3 w-52  font-extrabold"
          >
            {itemsRoutes}
          </ul>
        </div>
        <a className=" normal-case text-xl sm:text-3xl font-bold">CareerHub</a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-black  font-extrabold ">
          {itemsRoutes}
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink  to={"/starApply"} className="btn  btn-xs sm:btn-md   bg-gradient text-white font-bold">
          Star Applying
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
