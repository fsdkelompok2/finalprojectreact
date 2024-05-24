import { Route } from "react-router-dom";
import Home from "../../pages/Home";
import RequestVerificationCode from "../../pages/auth/signUp/RequestVerificationCode";
import SendVerificationCode from "../../pages/auth/signUp/SendVerificationCode";
import SignIn from "../../pages/auth/SignIn";

const userRoutes = () => {
    return (
        <>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up/request-verification-code" element={<RequestVerificationCode />} />
            <Route path="/sign-up/send-verification-code" element={<SendVerificationCode />} />
            <Route path="/sign-in" element={<SignIn />} />
        </>
    );
}

export default userRoutes;