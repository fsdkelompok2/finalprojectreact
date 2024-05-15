import { SiJordan, SiNike } from "react-icons/si";
import { FiMenu, FiUser } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { DropdowMenu } from "./Menu";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="w-full px-10 py-2 md:flex justify-between items-center hidden">
        <SiJordan className="w-6 h-6" />
        <a className="text-sm font-medium" href="#">
          Sign In
        </a>
      </nav>
      <nav className="navbar px-10 bg-base-100">
        <div className="navbar-start">
          <a>
            <SiNike className="w-10 h-10 md:w-14 md:h-14" />
          </a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-medium">
            <DropdowMenu label={"Men"} items={["Shoes", "Clothing"]} />
            <DropdowMenu label={"Women"} items={["Shoes", "Clothing"]} />
            <DropdowMenu label={"Kids"} items={["Shoes", "Clothing"]} />
          </ul>
        </div>
        <div className="navbar-end flex items-center">
          <Link to="/sign-in" className="btn btn-ghost btn-circle">
            <FiUser className="w-6 h-6" />
          </Link>
          <Link to="/wishlist" className="btn btn-ghost btn-circle">
            <IoMdHeartEmpty className="w-6 h-6" />
          </Link>
          <Link to="/cart" className="btn btn-ghost btn-circle">
            <HiOutlineShoppingBag className="w-6 h-6" />
          </Link>
          <label
            htmlFor="my-drawer-4"
            className="md:hidden btn btn-ghost btn-circle"
          >
            <FiMenu className="w-6 h-6" />
          </label>
        </div>
      </nav>
    </>
  );
};
