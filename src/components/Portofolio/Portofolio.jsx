import React from "react";
import img from "../Home/img/img.jpg";
import img2 from "../Home/img/img2.jpg";
import img3 from "../Home/img/img3.jpg";

const Portofolio = () => {
    return (
        <section className="portofolio">
            <h1 className="title">Our Awesome Portofolio</h1>
            <div className="portofolio_items">
                <div className="portofolio_item">
                    <div className="img">
                        <img src={img} alt="Portofolio" />
                    </div>
                    <div className="img">
                        <img src={img2} alt="Portofolio" />
                    </div>
                    <div className="img">
                        <img src={img3} alt="Portofolio" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portofolio;