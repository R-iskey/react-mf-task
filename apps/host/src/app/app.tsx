import * as React from "react";

import { Link, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("home/Module"));
const Users = React.lazy(() => import("users/Module"));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
