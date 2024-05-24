import { Link } from "react-router-dom";
import AuthHeader from "../../../components/Header";

const Header = () => {
    return (
        <AuthHeader>
            <h1 className="text-3xl">Create your account to join us</h1>
            <p className="text-base">
                Alredy have account?{" "}
                <Link to="/sign-in" className="underline">
                    Sign In
                </Link>
            </p>
        </AuthHeader>
    );
};

export default Header;