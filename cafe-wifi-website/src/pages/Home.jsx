import React from "react";
import Navigation from "./../components/Navigation";
import "./../styles/home.css"
import bgImg from "./../assets/restaurant_b.jpg"

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="bg-layout" style={{backgroundImage: `url(${bgImg})`}}>
                <div className="bg-zindex">
                    <div className="sh-des">
                        <h1 className="antic-didone-regular">Are you looking for suitable cafe?</h1>
                    </div>
                </div>
            </div>
            <div className="bronze-line"></div>
            <div className="restaurants"></div>
        </div>
    )
}

export default Home;