import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      <h3>Welcome to Course F8</h3>
      <Navbar bg="warning">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link
              className="color-decor btn btn-primary"
              to="/use-state"
              role="btn"
            >
              useState
            </Link>{" "}
            {/* |{" "} */}
            <Link className="color-decor btn btn-primary ms-2" to="/use-effect">
              useEffect
            </Link>
            <Link className="color-decor btn btn-primary ms-2" to="/useref">
              useRef
            </Link>
            <Link className="color-decor btn btn-primary ms-2" to="/jsx">
              JSX
            </Link>
            <Link className="color-decor btn btn-primary ms-2" to="/memo">
              Memo & useCallback
            </Link>
            <Link className="color-decor btn btn-primary ms-2" to="/use-memo">
              MainUseMemo
            </Link>
            <Link
              className="color-decor btn btn-primary ms-2"
              to="/use-reducer"
            >
              UseReducer
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
