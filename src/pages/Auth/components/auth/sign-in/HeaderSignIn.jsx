import JordanLogo from "../../../assets/JordanLogo";
import NikeLogo from "../../../assets/NikeLogo";
import { Link } from "react-router-dom";

const HeaderSignIn = () => {
  return (
    <header
      className="flex flex-col gap-6"
      tabIndex={0}
      aria-label="Enter your email to join us or sign in. group"
    >
      <div className="flex items-center gap-6">
        <Link to={"/"}>
          <NikeLogo />
        </Link>
        <Link to={"/"}>
          <JordanLogo />
        </Link>
      </div>
      <h1 className="text-4xl antialiased font-normal tracking-wide">
        Enter your account to join us.
      </h1>
      <p className="text-base">
        Don't have an account?{" "}
        <Link to="/sign-up" className="underline">
          Sign Up
        </Link>
      </p>
    </header>
  );
};

export default HeaderSignIn;
