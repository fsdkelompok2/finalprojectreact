import Layout from "../../components/Layout";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useLazyUserDetailsQuery, useRegisterMutation } from "../../../../redux/api/auth";
import { useNavigate } from "react-router-dom";
import Loader from "../../../../components/Loader";
import Header from "../components/Header";

const SendVerificationCode = () => {
    const [showPasword, setShowPassword] = useState(false);

    const [signUp, setSignUp] = useState({
        code: null,
        first_name: "",
        last_name: "",
        password: "",
        shopping_preference: "men",
        birth: "",
        subscribe: false,
    });

    const [registerMutation, {
        isLoading: registerMutationIsLoading, 
        isSuccess: registerMutationIsSuccess, 
        isError: registerMutationIsError, 
        data: registerMutationData, 
        error: registerMutationError,
    }] = useRegisterMutation();

    const [userDetailsQuery, {
        isLoading: userDetailsQueryIsLoading, 
        isError: userDetailsQueryIsError,
        isSuccess: userDetailsQueryIsSuccess,
        data: userDetailsQueryData,
        error: userDetailsQueryError,
    }] = useLazyUserDetailsQuery();

    const navigate = useNavigate();

    // Watch useRegisterMutation
    useEffect(() => {
        if(registerMutationIsLoading) {
            console.log("REGISTER USER IS LOADING");
        }

        if(registerMutationIsSuccess) {
            console.log("REGISTER SUCCESS", registerMutationData);
            userDetailsQuery();
        }

        if(registerMutationIsError) {
            console.log("REGISTER ERROR", registerMutationError);
            alert("REGISTER ERROR");
        }
    }, [
        registerMutationIsLoading, 
        registerMutationIsSuccess, 
        registerMutationIsError
    ]);

    // Watch useLazyUserDetailsQuery
    useEffect(() => {
        if (userDetailsQueryIsLoading) {
            console.log(`userDetailsQueryIsLoading`);
        }

        if (userDetailsQueryIsError) {
            console.log(`userDetailsQueryIsError ${userDetailsQueryError}`);
            navigate("/sign-in", {replace: true});
        }

        if (userDetailsQueryIsSuccess) {
            console.log(`userDetailsQueryIsSuccess ${userDetailsQueryData}`);
            navigate("/", {replace: true});
        }
    }, [
        userDetailsQueryIsLoading,
        userDetailsQueryIsError,
        userDetailsQueryIsSuccess
    ]);

    const submitHandler = (e) => {
        e.preventDefault();
        registerMutation({...signUp, birth: new Date(signUp.birth).toISOString()});
    };
    
    return (
        <Layout>
            <Header />
            <div className="w-full flex flex-col gap-10">
                <form onSubmit={submitHandler} className="flex flex-col gap-8">
                    {/* Verification Code */}
                    <div className="flex flex-col">
                        <label htmlFor="code" className="label label-text">
                            Verification code
                        </label>
                        <input
                            required
                            onChange={(e) =>
                                setSignUp({
                                ...signUp,
                                code: e.target.value,
                                })
                            }
                            type="number"
                            id="code"
                            placeholder="Verification code"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* First Name */}
                    <div className="flex flex-col">
                        <label htmlFor="first_name" className="label label-text">
                            First Name
                        </label>
                        <input
                            required
                            onChange={(e) =>
                                setSignUp({
                                ...signUp,
                                first_name: e.target.value,
                                })
                            }
                            id="first_name"    
                            type="text"
                            placeholder="First Name"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col">
                        <label htmlFor="last_name" className="label label-text">
                            Last Name
                        </label>
                        <input
                            required
                            onChange={(e) =>
                                setSignUp({
                                ...signUp,
                                last_name: e.target.value,
                                })
                            }
                            id="last_name"
                            type="text"
                            placeholder="Last Name"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col">
                        <label htmlFor="password" className="label label-text">
                            Password
                        </label>
                        <div className="input input-bordered flex items-center gap-2">
                        <input
                            required
                            onChange={(e) =>
                            setSignUp({
                                ...signUp,
                                password: e.target.value,
                            })}
                            id="password"
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
                        </div>
                    </div>

                    {/* Shopping preference */}
                    <div className="w-full">
                        <label htmlFor="preferences" className="label label-text">
                            Shopping preferences
                        </label>
                        <select
                            required
                            onChange={(e) =>
                                setSignUp({
                                ...signUp,
                                shopping_preference: e.target.value,
                                })
                            }
                            id="preferences"
                            value={signUp.preferences}
                            className="select select-bordered w-full"
                        >
                        <option value="men">Men's</option>
                        <option value="woman">Women's</option>
                        </select>
                    </div>

                    {/* Birth date */}
                    <div className="w-full">
                        <label htmlFor="birthday" className="label label-text">
                        Date of birth
                        </label>
                        <input
                            required
                            onChange={(e) =>
                                setSignUp({
                                ...signUp,
                                birth: e.target.value,
                                })
                            }
                            id="birthday"
                            type="date"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center gap-8">
                        <input
                            checked={signUp.subscribe}
                            onChange={(e) =>
                                setSignUp({
                                ...signUp,
                                subscribe: !signUp.subscribe,
                                })
                            }
                            id="subscribe-email"
                            type="checkbox"
                            className="checkbox"
                            required
                        />
                        <label htmlFor="subscribe-email" className="text-start label-text">
                            Subcribe for emails to get updates from Nike on products, offers and
                            your Member benefits.
                        </label>
                    </div>
                    <div className="flex items-center gap-8">
                        <input required id="agree-terms" type="checkbox" className="checkbox" />
                        <label htmlFor="agree-terms" className="text-start label-text">
                        I agree to Nike's{" "}
                        <a
                            target="_blank"
                            href="#"
                            rel="noopener noreferrer"
                            className="font-bold underline"
                        >
                            Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a
                            target="_blank"
                            href="#"
                            rel="noopener noreferrer"
                            className="font-bold underline"
                        >
                            Terms of Use
                        </a>
                        .
                        </label>
                    </div>
                    
                    {/* Submit button */}
                    <div className="flex justify-end">
                        <button 
                            type="submit" 
                            className="btn text-white bg-black rounded-full"
                            disabled={registerMutationIsLoading || userDetailsQueryIsLoading}
                        >
                            {(registerMutationIsLoading || userDetailsQueryIsLoading) ? <Loader /> : "Create Account"}
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default SendVerificationCode;