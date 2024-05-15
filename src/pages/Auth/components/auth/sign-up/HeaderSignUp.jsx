import JordanLogo from "../../../assets/JordanLogo";
import NikeLogo from "../../../assets/NikeLogo";
import { Link } from "react-router-dom";

const HeaderSignUp = () => {
  return (
    <header className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Link to={"/"}>
          <NikeLogo />
        </Link>
        <Link to={"/"}>
          <JordanLogo />
        </Link>
      </div>
      <h1 className="text-3xl">Create your account to join us</h1>
      <p className="text-base">
        Alredy have account?{" "}
        <Link to="/sign-in" className="underline">
          Sign In
        </Link>
      </p>
    </header>
  );
};

export default HeaderSignUp;
