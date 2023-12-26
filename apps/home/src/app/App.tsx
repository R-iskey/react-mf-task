import { HomeTasksList } from '@picsart/home/feature-tasks-list';
import { ChakraProvider } from '@chakra-ui/react';

export function App() {
  return (
    <ChakraProvider>
      <HomeTasksList />
    </ChakraProvider>
  );
}

export default App;
