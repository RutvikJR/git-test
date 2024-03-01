import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1 className="text-3xl text-sky-600 font-semibold text-center">Git Test</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
      <footer>
        <p>footer here</p>
      </footer>
    </>
  );
};

export default Layout;
