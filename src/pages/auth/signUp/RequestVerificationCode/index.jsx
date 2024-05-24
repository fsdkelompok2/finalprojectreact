import Layout from "../../components/Layout";
import { useRequestVerificationCodeMutation } from "../../../../redux/api/auth";
import { useState, useEffect } from "react";
import Loader from "../../../../components/Loader";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const RequestVerificationCode = () => {
    const [requestVerificationCodeToServer, {isLoading, isError, error, isSuccess, data}] = useRequestVerificationCodeMutation();
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if(isError) {
            alert("REQUEST VERIFICATION CODE IS ERROR");
            console.log("REQUEST VERIFICATION CODE IS ERROR", isError);
        };
        if(isSuccess) {
            console.log("REQUEST VERIFICATION CODE IS SUCCESS", data);
            navigate("/sign-up/send-verification-code", {replace: true});
        };
    }, [isLoading, isError, isSuccess]);
    
    const submitHandler = (e) => {
        e.preventDefault();
        requestVerificationCodeToServer({ email });
    };
    
    return (
        <Layout>
            <Header />
            <div className="w-full flex flex-col gap-10">
                <form onSubmit={submitHandler} className="flex flex-col gap-8">
                    {/* Email */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="label label-text">
                            Email
                        </label>
                        <input
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full"
                        />
                    </div>
                    {/* Submit button */}
                    <div className="flex justify-end">
                        <button 
                            type="submit" 
                            className="flex justify-center align-center btn text-white bg-black rounded-full"
                            disabled={isLoading}
                        >
                            {isLoading ? <Loader />: "Create Account"}
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default RequestVerificationCode;