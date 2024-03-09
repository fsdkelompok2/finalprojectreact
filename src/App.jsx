import Home from "./pages/Home/Home";
import SignIn from "./pages/Auth/Sign-In";
import SignUp from "./pages/Auth/Sign-Up";
import HomePage from "./pages/Home1/HomePage";
import { ProtectedRoute } from "./pages/Auth/components/auth/ProtectedRoute";
import AuthProvider from "./pages/Auth/components/auth/AuthProvider";
import CustomRoutes from "./pages/Auth/components/auth/CustomRoute";

const App = () => {
  // Route hanya untuk user publik (login/tidak login)
  const routesForPublic = [
    {
      path: "/",
      element: <Home />,
    },
  ];

  // Route hanya untuk login user
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/profile",
          element: <div>User Profile</div>,
        },
      ],
    },
  ];

  // Route hanya untuk user tidak login
  const routesForNotAuthenticatedOnly = [
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
  ];

  return (
    <AuthProvider>
      <CustomRoutes
        publicRoutes={routesForPublic}
        protectedRoutes={routesForAuthenticatedOnly}
        unProtectedRoutes={routesForNotAuthenticatedOnly}
      />
    </AuthProvider>
  );
};

export default App;
