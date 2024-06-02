import { SiJordan, SiNike } from "react-icons/si";
import { FiMenu, FiUser } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { DropdowMenu } from "./Menu";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "../../redux/features/userSlice";

export const Navbar = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(resetState());
    navigate("/sign-in");
  };

  return (
    <>
      {/* Top Menu */}
      <nav className="w-full px-10 py-2 md:flex justify-between items-center hidden">
        <Link to="/">
          <SiJordan className="w-6 h-6" />
        </Link>
        {/* Sign in button, show user email, logout  */}
        <div className="text-sm font-medium">
          {!isAuthenticated ? (
            <Link to="/sign-in">Sign In</Link>
          ) : (
            <div className="flex gap-2">
              <p>{user.email}</p>
              <p>&#124;</p>
              <button onClick={logoutHandler}>Logout</button>
            </div>
          )}
        </div>
      </nav>
      {/* Bottom Menu */}
      <nav className="navbar px-10 bg-base-100">
        {/* Left */}
        <div className="navbar-start">
          <Link to="/">
            <SiNike className="w-10 h-10 md:w-14 md:h-14" />
          </Link>
        </div>
        {/* Middle */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-medium">
            <DropdowMenu label={"Men"} items={["Shoes", "Clothing"]} />
            <DropdowMenu label={"Women"} items={["Shoes", "Clothing"]} />
            <DropdowMenu label={"Kids"} items={["Shoes", "Clothing"]} />
          </ul>
        </div>
        {/* Right */}
        <div className="navbar-end flex items-center">
          <Link to="/" className="btn btn-ghost btn-circle">
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
