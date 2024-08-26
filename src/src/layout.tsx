import {Link, Outlet} from "react-router-dom";


const Layout = () => {
  return (
    <div className="container">
      <header>
        <div className="logo"><span><Link to="/">Bokregister</Link></span></div>
        <nav>
          <ul>
            <li><Link to="/">Books</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>
      </header>
      <main><Outlet/></main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;