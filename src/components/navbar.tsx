import {Link} from "react-router-dom";
import {getFlagValue} from "@app/flagsmithClient";

export default function NavBar() {
  const pluginA = getFlagValue("plugin_a");

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">Online Management System</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto">
              {pluginA &&
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/start">Start</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products">Produkte</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/user">User</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/help">Hilfe</Link>
                  </li>
                </>
              }
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
