import { appRoutes } from './appRoutes';
import { Route, Routes } from 'react-router-dom';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

export function App() {
  return (
    <ChakraProvider>
      <React.Suspense fallback={null}>
        <Routes>
          {appRoutes.map((route) => (
            <Route
              index={route.index}
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </React.Suspense>
    </ChakraProvider>
  );
}

export default App;
