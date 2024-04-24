import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Layout = () => {

  return (
    <div>
      <Navbar></Navbar>
      {/* main area */}
      <main>       
        <div className="main--content--upper w-[1320px] mx-auto -mt-[60px] overflow-hidden rounded-[24px]">
          <div className="main--content--wrapper overflow-hidden bg-white">
            <Outlet></Outlet>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
