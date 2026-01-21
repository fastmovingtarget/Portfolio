import { Outlet, useNavigate } from "react-router";
import NavBar from "./NavBar";
import "./Layout.css"
import Header from "./Header";
import Content from "./Content";
//import HeaderImage from "../Images/Header.png"
//import HeaderImagePortrait from "../Images/HeaderPortrait.png"

function Layout() {
    const navigate = useNavigate();

    return (
        <div className="Layout">
            <Header />
            <div className="layout-main">
                <NavBar navigate={navigate}/>
                <Content />
            </div>
        </div>
    );
}

export default Layout;