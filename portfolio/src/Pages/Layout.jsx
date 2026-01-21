import { Outlet, useNavigate } from "react-router";
import NavBar from "./NavBar";
import "./Layout.css"
import Header from "./Header";
//import HeaderImage from "../Images/Header.png"
//import HeaderImagePortrait from "../Images/HeaderPortrait.png"

function Layout() {
    const navigate = useNavigate();

    return (
        <div className="Layout">
            <Header />
            <div className="layout-main">
                <NavBar navigate={navigate}/>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;