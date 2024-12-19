import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./../styles/restaurants.css";

import tick from "./../assets/tick-inside-circle.png"
import crossTick from "./../assets/unchecked.png"
import Delete from "./Delete";

import axios from "axios"

const Restaurants = ({resData}) => {

    const cafes = resData.fetchedData.cafes;

    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [selectedCafeId, setSelectedCafeId] = useState(null);

    const secretKey = "TopSecretAPIKey"

    const deleteData = (id) => {
        setSelectedCafeId(id);
        setShowDeleteConfirm(true);
    }

    const handleDelete = async(id) => {
        try{
            const res = await axios.delete(`http://127.0.0.1:5000/report-closed/${id}`, {
                params: {
                    "api-key": secretKey
                }
            });
            console.log(res.status)
            window.location.reload();
        }
        catch(error){
            if (error.status){
                console.log(error.status)
            }
        }
    }

    const handleCancel = () => {
        setSelectedCafeId(null);
        setShowDeleteConfirm(false);
    }

    useEffect(() => {
        if (showDeleteConfirm){
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => document.body.style.overflow = "auto";

    }, [showDeleteConfirm])

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
                                <Link to={`/edit-restaurant/${cafe.id}`} state={cafe} className="res-button edit-btn">Edit</Link>
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
                            <a href="/">View</a>
                        </div>
                    </div>
                </div>
            ))}
            {showDeleteConfirm && (
                <Delete 
                    onDelete={() => handleDelete(selectedCafeId)} 
                    onCancel={handleCancel}
                />
            )}
        </div>
    )
}

export default Restaurants;