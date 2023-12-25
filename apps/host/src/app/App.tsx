import * as React from "react";
import Navigation from "./components/navigation/Navigation";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { appRoutes } from "./appRoutes";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { GlobalStyles } from "./App.styled";

export function App() {
  const location = useLocation();

  return (
    <div style={{position: 'relative'}}>
      <GlobalStyles />
      <Navigation />
      <SwitchTransition>
        <CSSTransition key={location.key} timeout={300} unmountOnExit classNames="page">
          <React.Suspense fallback={null}>
            <Main>
              <Routes location={location}>
                {
                  appRoutes.map(route =>
                    <Route key={route.path} index={route.index} path={route.path} element={route.element} />
                  )
                }
                <Route path="*" element={null} />
              </Routes>
            </Main>
            <Footer />
          </React.Suspense>
        </CSSTransition>
      </SwitchTransition>
    </div>

  );
}

export default App;
