import React, { useState, useEffect } from "react";
import "./../styles/home.css"

// COMPONENTS
import Navigation from "./../components/Navigation";
import Restaurants from "../components/Restaurants";
import ErrorNotFound from "../components/ErrorNotFound";

// OTHERS
import bgImg from "./../assets/restaurant_b.jpg"
import axios from "axios"

const Home = () => {

    const [fetchedData, setFetchedData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("")


    useEffect(() => {
        const fetchData = async() => {
            try{
                const res = await axios.get("http://127.0.0.1:5000/all");
                setFetchedData(res.data);
            }
            catch(error){
                setError("Failed to fetch data.")
                console.log("error occured while communicating to backend.");
            } 
            finally{
                setLoading(false);
            }   
        }

        fetchData()
    }, [])

    return (
        <div className="home">
            <Navigation />
            {loading ? (
                <p>Loading...</p>
                ) : error ? (
                    <ErrorNotFound />
                ) : (
                    <div className="fetched">
                        <div className="bg-layout" style={{backgroundImage: `url(${bgImg})`}}>
                            <div className="bg-zindex">
                                <div className="sh-des">
                                    <h1 className="antic-didone-regular">Are you looking for cafe?</h1>
                                    <a href="/createrestaurant" className="add-res-btn">Add Restaurant</a>
                                </div>
                            </div>
                        </div>
                        <div className="bronze-line"></div>
                        <div className="rest-cont">
                            <Restaurants resData={{fetchedData}}/>
                        </div>
                    </div>
                )
            }  
        </div>
    )
}

export default Home;