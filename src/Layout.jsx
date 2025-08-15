import { Link, Outlet } from "react-router-dom";
import "./CRUD/Components/STYLE/Layout.css";

const Layout = () => {
    return (
        <div className="layout-wrapper">
            <header className="navbar">
                <nav className="nav-links">
                    <Link to="home">Home</Link>
                    <Link to="insert">Insert</Link>
                    <Link to="update">Update</Link>
                    <Link to="display">Display</Link>
                    <Link to="search">Search</Link>
                    <Link to="contact">Contact</Link>
                </nav>
            </header>

            <hr className="divider" />

            <main className="main-content">
                <Outlet />
            </main>

            <hr className="divider" />

            <footer className="footer">
                &copy; {new Date().getFullYear()} www.myCompany.com
            </footer>
        </div>
    );
};

export default Layout;
