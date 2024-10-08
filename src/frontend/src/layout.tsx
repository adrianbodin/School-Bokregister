import {Link, Outlet} from "react-router-dom";


const Layout = () => {
  return (
    <div className="container">
      <header>
        <div className="logo"><span><Link to="/">Bokregister</Link></span></div>
        <nav>
          <ul>
            <li><Link to="/">Books</Link></li>
            <li><Link to="/login">Logga in</Link></li>
            <li><Link to="/register">Registrera</Link></li>
          </ul>
        </nav>
      </header>
      <main><Outlet/></main>
      <footer><span>Bokregister {new Date().getFullYear()} &copy;</span></footer>
    </div>
  );
};

export default Layout;