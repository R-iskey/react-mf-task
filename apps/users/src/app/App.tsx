import { appRoutes } from "./appRoutes";
import { Route, Routes } from "react-router-dom";
import * as React from "react";

export function App() {
  return (
    <React.Suspense fallback={null}>
      <h1>Users</h1>
      <Routes>
        {
          appRoutes.map(route =>
            <Route index={route.index} key={route.path} path={route.path} element={route.element} />
          )
        }
      </Routes>
    </React.Suspense>
  );
}

export default App;
