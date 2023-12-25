import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";

import App from "./app/App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter basename={'/users'}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
