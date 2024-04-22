import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* main area */}
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Layout;
