import React from "react";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Portofolio from "../Portofolio/Portofolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./css/style.css";

const Home = () => {
    return (
        <>
            <Nav />
            <Header />
            <main>
                <Services />
                <Portofolio />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default Home;