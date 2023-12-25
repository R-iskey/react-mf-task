import { HomeTasksList } from "@picsart/home/feature-tasks-list";
import { ChakraProvider } from "@chakra-ui/react";
import { Page } from "@picsart/ui";

export function App() {
  return (
    <ChakraProvider>
      <Page title={"Home"}>
        <HomeTasksList />
      </Page>
    </ChakraProvider>
  );
}

export default App;
