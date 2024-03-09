import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { postUsers } from "../../../lib/fetch";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";

const FormSignUp = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [showPasword, setShowPassword] = useState(false);
  const [users, setUsers] = useState(null);
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    preferences: "men",
    birth: "",
    subscribe: false,
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    const postData = async () => {
      await postUsers(signUp).then((data) => setUsers(data));
      setToken("this is a test token");
      return navigate("/");
    };
    postData().catch(console.error);
  };

  console.log(users);

  return (
    <form onSubmit={handleSignUp} className="flex flex-col gap-8">
      {/* <!-- Name --> */}
      <div className="flex flex-col">
        <label htmlFor="email" className="label label-text">
          Name
        </label>
        <input
          required
          onChange={(e) =>
            setSignUp({
              ...signUp,
              name: e.target.value,
            })
          }
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
        />
      </div>

      {/* <!-- Email --> */}
      <div className="flex flex-col">
        <label htmlFor="email" className="label label-text">
          Email
        </label>
        <input
          required
          onChange={(e) =>
            setSignUp({
              ...signUp,
              email: e.target.value,
            })
          }
          id="email"
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
        />
      </div>

      {/* <!-- Password Input --> */}
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
              })
            }
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

      {/* <!-- Sellect Shopping Preference --> */}
      <div className="w-full">
        <label htmlFor="preferences" className="label label-text">
          Shopping preferences
        </label>
        <select
          required
          onChange={(e) =>
            setSignUp({
              ...signUp,
              preferences: e.target.value,
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

      {/* <!-- Date Input --> */}
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

      {/* <!-- Checkbox --> */}
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

      {/* <!-- Submit Button --> */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="btn btn-xs sm:btn-sm md:btn-md rounded-full"
        >
          Create Account
        </button>
      </div>
    </form>
  );
};

export default FormSignUp;
