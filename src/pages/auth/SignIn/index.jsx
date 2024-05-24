import Layout from "../components/Layout";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useLazyVerifyIdentityTokenQuery } from "../../../redux/api/auth";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader";

const SignIn = () => {
    const navigate = useNavigate();
    const [showPasword, setShowPassword] = useState(false);
    const [isAlert, setIsAlert] = useState(false);
    const [signIn, setSignIn] = useState({
        email: "",
        password: "",
        country: "Indonesia",
    });
    const [login, {
        isLoading: loginIsLoading, 
        isSuccess: loginIsSuccess, 
        isError: loginIsError, 
        data: loginData, 
        error: loginError}
    ] = useLoginMutation();
    const [verifyIdentityToken, {
        isLoading: verifyIdentityTokenIsLoading, 
        isError: verifyIdentityTokenIsError, 
        isSuccess: verifyIdentityTokenIsSuccess, 
        error: verifyIdentityTokenError,
        data: verifyIdentityTokenData
    }] = useLazyVerifyIdentityTokenQuery();

    // Watch Login
    useEffect(() => {
        if(loginIsLoading) {
            console.log("LOGIN IS LOADING");
        }

        if(loginIsSuccess) {
            console.log("LOGIN SUCCESS", loginData);
            verifyIdentityToken();
        }

        if(loginIsError) {
            console.log("LOGIN ERROR", loginError);
        }

    }, [loginIsLoading, loginIsSuccess, loginIsError])

    // Watch verifyIdentityToken
    useEffect(() => {
        if(verifyIdentityTokenIsLoading) {
            console.log("VERIFY IDENTITY TOKEN IS LOADING");
        }

        if(verifyIdentityTokenIsSuccess) {
            console.log("VERIFY IDENTITY TOKEN IS SUCCESS", verifyIdentityTokenData);
            navigate("/");
        }

        if(verifyIdentityTokenIsError) {
            console.log("VERIFY IDENTITY TOKEN IS ERROR", verifyIdentityTokenError);
        }
    }, [verifyIdentityTokenIsLoading, verifyIdentityTokenIsError, verifyIdentityTokenIsSuccess])
    
    const submitHandler = (e) => {
        e.preventDefault();
        login(signIn);
    };

    return (
      <Layout>
        <Header>
            <h1 className="text-3xl">Sign In</h1>
            <p className="text-base">
                Don&#39;t have account?{" "}
                <Link to="/sign-up/request-verification-code" className="underline">
                    Sign Up
                </Link>
            </p>
        </Header>
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
            {/* Email */}
            <input
                required
                onFocus={() => setIsAlert(false)}
                onChange={(e) =>
                setSignIn({
                    ...signIn,
                    email: e.target.value,
                })
                }
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
            />
            {/* Password */}
            <label className="input input-bordered flex items-center gap-2">
                <input
                    required
                    onFocus={() => setIsAlert(false)}
                    onChange={(e) =>
                        setSignIn({
                        ...signIn,
                        password: e.target.value,
                        })
                    }
                    type={showPasword ? "text" : "password"}
                    className="grow"
                    placeholder="Password"
                />
                <button type="button" onClick={() => setShowPassword(!showPasword)}>
                    {showPasword ? (
                            <EyeOff size={24} strokeWidth={1.5} absoluteStrokeWidth />
                        ) : (
                            <Eye size={24} strokeWidth={1.5} absoluteStrokeWidth />
                    )}
                </button>
            </label>
            {isAlert && (
                <AlertWarning message="Warning: Invalid email address or password!" />
            )}
            {/* Terms and conditions */}
            <div className="flex flex-col gap-6 mb-1">
                <p className="font-sans antialiased font-normal leading-relaxed">
                    By continuing, I agree to Nike&#39;s{" "}
                <a href="#" className="font-bold underline">
                    Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="font-bold underline">
                    Terms of Use
                </a>
                .
                </p>
                {/* Submit button */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="btn text-white bg-black rounded-full"
                        disabled={loginIsLoading || verifyIdentityTokenIsLoading}
                    >
                        {loginIsLoading || verifyIdentityTokenIsLoading ? <Loader/> : "Continue"}
                    </button>
                </div>
            </div>
        </form>
      </Layout>
    );
  };
  
  export default SignIn;