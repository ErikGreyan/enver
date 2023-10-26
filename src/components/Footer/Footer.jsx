import React from "react";
import Logo from "../Home/img/favicon.ico";
import { Link } from "react-router-dom";

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer>
            <div className="footer">
                <div className="logo">
                    <img src={Logo} alt="Ico" />
                    <p>Enver</p>
                </div>
                <ul>
                    <li><Link to="#">Support</Link></li>
                    <li><Link to="#">Privacy Policy</Link></li>
                    <li><Link to="#">Terms and Conditions</Link></li>
                </ul>
                <p>© {date} Enver, All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer