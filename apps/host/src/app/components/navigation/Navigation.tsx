import { Link } from "react-router-dom";
import * as React from "react";

function Navigation() {
  return (
    <header role={'navigation'}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </nav>
    </header>
  );
}

export default Navigation;
