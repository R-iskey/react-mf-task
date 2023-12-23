import * as React from "react";

const Home = React.lazy(() => import("home/Module"));
const Users = React.lazy(() => import("users/Module"));

export const appRoutes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/users',
    element: <Users />
  }
]
