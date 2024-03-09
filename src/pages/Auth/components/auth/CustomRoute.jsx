import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const CustomRoutes = ({ publicRoutes, protectedRoutes, unProtectedRoutes }) => {
  const { token } = useAuth();

  const router = createBrowserRouter([
    ...publicRoutes,
    ...(!token ? unProtectedRoutes : []),
    ...protectedRoutes,
  ]);

  return <RouterProvider router={router} />;
};

export default CustomRoutes;
