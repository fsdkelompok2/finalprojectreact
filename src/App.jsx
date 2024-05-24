import { BrowserRouter, Routes, Route } from 'react-router-dom';
import userRoutes from "./components/routes/userRoutes";
import NoMatch from "./pages/NoMatch";

const App = () => {
  const useUserRoutes = userRoutes();

  return (
    <BrowserRouter>
      <Routes>
        {useUserRoutes}
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
