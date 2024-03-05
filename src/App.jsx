import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/Auth/Sign-In";
import SignUp from "./pages/Auth/Sign-Up";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
