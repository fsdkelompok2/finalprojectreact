import FormSignUp from "./FormSignUp";
import HeaderSignUp from "./HeaderSignUp";

const SignUpComponent = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <HeaderSignUp />
      <FormSignUp />
    </div>
  );
};

export default SignUpComponent;
