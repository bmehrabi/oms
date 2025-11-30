import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar.tsx";
import {Outlet} from "react-router-dom";

function MainLayout() {
  return (
    <>
      <NavBar/>
      <main className="container mt-4">
        <Outlet/>
      </main>
    </>
  )
}

export default MainLayout
