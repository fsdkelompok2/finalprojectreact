import { Link } from "react-router-dom";
import NikeLogo from "../../../../../../assets/NikeLogo";
import JordanLogo from "../../../../../../assets/JordanLogo";

const Logo = () => {
    return (
        <div className="flex gap-4">
            <Link to={"/"}>
                <NikeLogo />
            </Link>
            <Link to={"/"}>
                <JordanLogo />
            </Link>
        </div>
    );
}

export default Logo;