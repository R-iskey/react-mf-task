import type { PropsWithChildren } from "react";
import * as React from "react";

function Main({ children }: PropsWithChildren) {
  return (
    <main role={"presentation"}>
      {children}
    </main>
  );
}

export default Main;
