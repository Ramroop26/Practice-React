import { Link, Outlet } from "react-router-dom"

const Layout=()=>{

    return(

    
        <>

        <Link to="home">Home</Link>
        <Link to="About">About</Link>
        <Link to="Contact">Contact</Link>
        <hr size="6" color="red"/>
        <Outlet/>
        <hr size="6" color="red"/>

        www.myCompany.com
        </>
    )
}

export default Layout;