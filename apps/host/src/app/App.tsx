import * as React from "react";
import Navigation from "./components/navigation/Navigation";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { appRoutes } from "./appRoutes";
import { Route, Routes } from "react-router-dom";

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Navigation />
      <Main>
        <Routes>
          {
            appRoutes.map(route =>
              <Route key={route.path} path={route.path} element={route.element} />
            )
          }
        </Routes>
      </Main>
      <Footer />
    </React.Suspense>
  );
}

export default App;
