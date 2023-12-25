import * as React from 'react';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { appRoutes } from './appRoutes';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Box } from '@chakra-ui/react';
import { ThemeProvider } from '@picsart/ui';
import { Navigation } from './components/navigation/Navigation';

export function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <Navigation />

      <Box minH={'100vh'} flexDirection={'column'}>
        <SwitchTransition>
          <CSSTransition
            key={location.key}
            timeout={300}
            unmountOnExit
            classNames="page"
          >
            <React.Suspense fallback={null}>
              <Main>
                <Routes location={location}>
                  {appRoutes.map((route) => (
                    <Route
                      key={route.path}
                      index={route.index}
                      path={route.path}
                      element={route.element}
                    />
                  ))}
                  <Route path="*" element={null} />
                </Routes>
              </Main>
            </React.Suspense>
          </CSSTransition>
        </SwitchTransition>
      </Box>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
