import { Route } from "react-router-dom";
import Home from "../../pages/Home";
import RequestVerificationCode from "../../pages/auth/signUp/RequestVerificationCode";
import SendVerificationCode from "../../pages/auth/signUp/SendVerificationCode";
import SignIn from "../../pages/auth/SignIn";
import Cart from "../../pages/Cart";

const userRoutes = () => {
    return (
        <>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up/request-verification-code" element={<RequestVerificationCode />} />
            <Route path="/sign-up/send-verification-code" element={<SendVerificationCode />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/cart" element={<Cart />} />
        </>
    );
}

export default userRoutes;