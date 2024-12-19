import React, {useState, useEffect} from "react";
import "./../styles/form.css"

import axios from "axios"
import { useNavigate } from "react-router-dom";

const Form = ({heading, submitType, cafeData, typeForm, cafeId}) => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState(cafeData || {
            name: "",
            location: "",
            seats: "",
            coffee_price: "",
            img_url: "",
            map_url: "",
            has_wifi: false,
            has_sockets: false,
            can_take_calls: false,
            has_toilet: false
    });

    useEffect(() =>{
        if (cafeData){
            setFormData(cafeData)
        }
    }, [cafeData])

    const handleChange = (e) => {
        const {name, value, checked, type} = e.target;
        setFormData({...formData, [name]: type === "checkbox" ? checked : value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (typeForm === "edit"){
            try{   
                const res = await axios.put(`http://127.0.0.1:5000/edit/${cafeId}`, formData, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                });
    
                if (res.status === 200){
                    navigate("/", {state: {message: res.data.response.Success}})
                }
            }
            catch(error){
                navigate("/", {state: {message: "Something went wrong. Try After Sometime.", changes: true}})
            }
            
        } else {
            try{
                const res = await axios.post("http://127.0.0.1:5000/add", formData, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                });
    
                if (res.status === 200){
                    navigate("/", {state: {message: ""}})
                }
            }
            catch(error){
                console.log("error");
            }
        }        
    }

    const handleGoBack = () => {
        navigate("/");
    }

    return (
        <div className="form-cont">
            <h1>{heading}</h1>
            <form onSubmit={handleSubmit} className="form-class" autoComplete="off">
                <div className="lab-text">
                    <div className="lab-in name-div">
                        <label htmlFor="name">Restaurant name:</label>
                        <input 
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter the Restaurant name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="lab-in seats">
                        <label htmlFor="seats">Seats:</label>
                        <input 
                            type="text"
                            name="seats"
                            id="seats"
                            placeholder="Eg: 25 or 20 - 25 or 25+"
                            value={formData.seats}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="lab-in price">
                        <label htmlFor="price">Price:</label>
                        <input 
                            type="text"
                            name="coffee_price"
                            id="price"
                            placeholder="Price value"
                            value={formData.coffee_price}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="lab-in location-name">
                        <label htmlFor="locationName">Location Name:</label>
                        <input 
                            type="text"
                            name="location"
                            id="loc-name"
                            placeholder="Enter the Location name"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="lab-in img-url">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input 
                            type="text"
                            name="img_url"
                            id="img-url"
                            placeholder="Must be link"
                            value={formData.img_url}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="lab-in loca-url">
                        <label htmlFor="locationUrl">Location URL:</label>
                        <input 
                            type="text"
                            name="map_url"
                            id="loc-url"
                            placeholder="Must be link"
                            value={formData.map_url}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="lab-check check-box">
                    <label htmlFor="">Facilities</label>
                    <div>
                        <div className="status-check">
                            <input type="checkbox" name="has_wifi" id="wifi" checked={formData.has_wifi} onChange={handleChange}/>
                            <label htmlFor="wifi">WiFi</label>
                        </div>
                        
                        <div className="status-check">
                            <input type="checkbox" name="has_sockets" id="sockets" checked={formData.has_sockets} onChange={handleChange}/>
                            <label htmlFor="sockets">Sockets</label>
                        </div>
                        
                        <div className="status-check">
                            <input type="checkbox" name="can_take_calls" id="calls" checked={formData.can_take_calls} onChange={handleChange}/>
                            <label htmlFor="calls">Video or voice calls</label>
                        </div>
                        
                        <div className="status-check">
                            <input type="checkbox" name="has_toilet" id="toilet" checked={formData.has_toilet} onChange={handleChange}/>
                            <label htmlFor="toilet">Toilet</label>
                        </div>
                    </div>
                </div>
                <div className="form-btns">
                    <button type="submit">{submitType}</button>
                    <div className="go-back" onClick={handleGoBack}>Go Back</div>
                </div>
            </form>
        </div>
    )
}

export default Form;