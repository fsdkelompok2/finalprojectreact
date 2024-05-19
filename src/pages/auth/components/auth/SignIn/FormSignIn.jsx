import { Eye, EyeOff } from "lucide-react";
import SelectCountry from "./SelectCountry";
import { useState, useEffect } from "react";
import { getUsers } from "../../../lib/fetch";
import { AlertWarning } from "../Alert";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";

const FormSignIn = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [showPasword, setShowPassword] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [isAlert, setIsAlert] = useState(false);
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
    country: "Indonesia",
  });

  useEffect(() => {
    const fetchData = async () => {
      await getUsers().then((data) => setAllUsers(data));
    };
    fetchData().catch(console.error);
    return;
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    const isUserFounded = allUsers.find(
      (users) =>
        users.email === signIn.email && users.password === signIn.password
    );

    if (isUserFounded) {
      setToken("this is a test token");
      if (isAlert) {
        setIsAlert(false);
      }
      return navigate("/", { replace: true });
    }

    setIsAlert(true);
    return null;
  };

  return (
    <form onSubmit={handleSignIn} className="flex flex-col gap-4">
      <SelectCountry initiaValue={signIn} onChange={setSignIn} />
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
      <div className="flex flex-col gap-6 mb-1">
        <p className="font-sans antialiased font-normal leading-relaxed">
          By continuing, I agree to Nike’s{" "}
          <a href="#" className="font-bold underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="font-bold underline">
            Terms of Use
          </a>
          .
        </p>
        <div className="flex justify-end">
          <button
            type="submit"
            className="btn text-white bg-black rounded-full"
          >
            Continue
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormSignIn;
