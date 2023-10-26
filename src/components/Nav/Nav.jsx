import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Home/img/favicon.ico";

const Nav = () => {
    const [btnState, setButton] = useState(false);
    const menu = () => {
        setButton(btnState => !btnState);
    }
    let menuActive = btnState ? "active" : "";

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    return (
        <nav className={scroll ? "active_bg" : ""}>
            <div className="logo">
                <img src={Logo} alt="Ico" />
                <p>Enver</p>
            </div>
            <ul className={menuActive}>
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">Services</Link></li>
                <li><Link to="#">Our Project</Link></li>
                <li className="contact"><button>Contact us</button></li>
            </ul>
            <div onClick={menu} className={`btn ${menuActive}`}>
                <span></span>
            </div>
        </nav>
    );
}

export default Nav;