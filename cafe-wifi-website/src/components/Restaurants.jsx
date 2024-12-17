import React from "react";
import "./../styles/restaurants.css";

import tick from "./../assets/tick-inside-circle.png"
import crossTick from "./../assets/unchecked.png"

import axios from "axios"

const Restaurants = ({resData}) => {

    const cafes = resData.fetchedData.cafes
    console.log(cafes)

    const secretKey = "TopSecretAPIKey"

    const deleteData = async(id) => {
        try{
            const res = await axios.delete(`http://127.0.0.1:5000/report-closed/${id}`, {
                params: {
                    "api-key": secretKey
                }
            });
            console.log(res.status)
        }
        catch(error){
            if (error.status){
                console.log(error.status)
            }
        }
    }

    return (
        <div className="restaurants">
            {cafes.map((cafe) => (
                <div key={cafe.id} className="res-card">
                    <div className="photo-card">
                        <img src={cafe.img_url} alt="" />
                    </div>
                    <div className="res-contents">
                        <div className="res-title">
                            <h1>{cafe.name}</h1>
                            <p>Location: <a href={cafe.map_url} className="loc-url">{cafe.location}</a></p>
                            <p>Seats: {cafe.seats}</p>
                            <div className="buttons">
                                <button className="res-button edit-btn">Edit</button>
                                <button className="res-button delete-btn" onClick={() => deleteData(cafe.id)} >Delete</button>
                            </div>
                        </div>
                        <div className="res-utility">
                            <div className="status">Wifi
                                {cafe.has_wifi ? 
                                    <img src={tick} alt="tick" className="tick" /> : 
                                    <img src={crossTick} alt="crosstick" className="cross-tick" />
                                }
                            </div>
                            <div className="status">Toilet
                                {cafe.has_toilet ? 
                                    <img src={tick} alt="tick" className="tick" /> : 
                                    <img src={crossTick} alt="crosstick" className="cross-tick" />
                                }
                            </div>
                            <div className="status">Video & Audio call
                                {cafe.can_take_calls ? 
                                    <img src={tick} alt="tick" className="tick" /> : 
                                    <img src={crossTick} alt="crosstick" className="cross-tick" />
                                }
                            </div>
                            <div className="status">Sockets
                                {cafe.has_sockets ? 
                                    <img src={tick} alt="tick" className="tick" /> : 
                                    <img src={crossTick} alt="crosstick" className="cross-tick" />
                                }
                            </div>
                        </div>
                        <div className="view-cont">
                            <a href="">View</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Restaurants;