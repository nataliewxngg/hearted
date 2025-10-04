import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

import "./MainNavigation.css"

function MainNavigation(props) {
    return <MainHeader>
        <button className="main-navigation__menu-btn">
            <span />
            <span />
            <span />
        </button>
        <h1 className="main-navigation__title">
            <Link to="/">
                Hearted
            </Link>
        </h1>
        <nav>
            <NavLinks />
        </nav>
    </MainHeader>
}

export default MainNavigation;