import React, {useState, useEffect} from "react";
import "./../styles/navigation.css"

const Navigation = () => {

    const [showNavBar, setNavBar] = useState(true);
    const [lastScrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50){
            setNavBar(false)
        }
        else{
            setNavBar(true)
        }

        setScrollY(currentScrollY)
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY])

    return (
        <div className={`nav-bar ${showNavBar ? "visible": "hidden"}`}>
            <div className="nav-container">
                <div className="logo-container">
                    <h1 className="logo-font"><a href="/home">Cafe & Wifi</a></h1>
                </div>
                <div className="menu-container">
                    <div className="menu">
                        <h1 className="nav-h1"><a href="/home">Home</a></h1>
                    </div>
                    <div className="border-white"></div>
                    <div className="menu">
                        <h1 className="nav-h1"><a href="/about">About Us</a></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;