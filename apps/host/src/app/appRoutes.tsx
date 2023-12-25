import * as React from "react";

const HomeRootApp = React.lazy(() => import("home/Module"));
const UsersRootApp = React.lazy(() => import("users/Module"));

export const appRoutes = [
  {
    path: '/',
    index: true,
    element: <HomeRootApp />
  },
  {
    path: '/users/*',
    element: <UsersRootApp />
  }
]
