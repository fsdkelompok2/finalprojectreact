import { Layout } from "./components/Layout";

import Home from "./pages/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Cart from "./pages/Cart";

import { ProtectedRoute } from "./pages/auth/components/auth/ProtectedRoute";
import AuthProvider from "./pages/auth/components/auth/AuthProvider";
import CustomRoutes from "./pages/auth/components/auth/CustomRoute";
import NoMatch from "./pages/NoMatch";

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
