import { Layout } from "./components/Layout";

import Home from "./pages/Home/Home";
import SignIn from "./pages/Auth/Sign-In";
import SignUp from "./pages/Auth/Sign-Up";
import Cart from "./pages/Cart/Cart";

import { ProtectedRoute } from "./pages/Auth/components/auth/ProtectedRoute";
import AuthProvider from "./pages/Auth/components/auth/AuthProvider";
import CustomRoutes from "./pages/Auth/components/auth/CustomRoute";
import NoMatch from "./pages/NoMatch/NoMatch";

const App = () => {
  // Route hanya untuk user publik (login/tidak login)
  const routesForPublic = [
    {
      path: "/",
      element: (
        <Home />
      ),
    },
    {
      path: "/cart",
      element: (
        <Layout>
          <Cart />
        </Layout>
      ),
    },
    {
      path: "*",
      element: <NoMatch />
    }
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
