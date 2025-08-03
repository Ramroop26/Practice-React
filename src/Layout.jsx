import { Link, Outlet } from "react-router-dom";

const Layout = () => {

    return (


        <>
            <Link to="home">Home |      </Link>
            <Link to="insert">Insert   | </Link>
            <Link to="update">Update  | </Link>
            <Link to="display">Display |</Link>
            <Link to="search">Search  | </Link>
            <Link to="contact">Contact |</Link>


            <hr size="6" color="red" />
            <Outlet />
            <hr size="6" color="red" />

            www.myCompany.com
        </>
    )
}

export default Layout;


