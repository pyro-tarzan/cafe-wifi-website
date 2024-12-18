import React, {useState} from "react";
import "./../styles/createRestaurant.css";

// COMPONENETS
import Navigation from "../components/Navigation";

const CreateRestaurant = () => {

    const [formData, setFormData] = useState({
        name: "",
        locationName: "",
        seats: "",
        price: "",
        imageUrl: "",
        locationUrl: "",
        wifi: false,
        toilet: false,
        sockets: false,
        calls: false
    })

    const handleChange = (e) => {}

    const handleSubmit = () => {}

    return (
        <div className="add-res">
            <Navigation />
            <div className="add-layer">
                <div className="form-cont">
                    <h1>Add a Restaurant</h1>
                    <form onSubmit={handleSubmit} className="form-class">
                        <div className="lab-in name-div">
                            <label htmlFor="name">Restaurant name</label>
                            <input 
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter the Restaurant name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="lab-in seats">
                            <label htmlFor="seats">Seats</label>
                            <input 
                                type="text"
                                name="seats"
                                id="seats"
                                placeholder="Eg: 25 or 20 - 25 or 25+"
                                value={formData.seats}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="lab-in price">
                            <label htmlFor="price">Price</label>
                            <input 
                                type="text"
                                name="price"
                                id="price"
                                placeholder="Price value"
                                value={formData.price}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="lab-in location-name">
                            <label htmlFor="loc-name">Location Name</label>
                            <input 
                                type="text"
                                name="loc-name"
                                id="loc-name"
                                placeholder="Enter the Location name"
                                value={formData.locationName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="lab-in img-url">
                            <label htmlFor="img-url">Image URL</label>
                            <input 
                                type="text"
                                name="img-url"
                                id="img-url"
                                placeholder="Must be link"
                                value={formData.imageUrl}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="lab-in loca-url">
                            <label htmlFor="loc-url">Location URL</label>
                            <input 
                                type="text"
                                name="loc-url"
                                id="loc-url"
                                placeholder="Must be link"
                                value={formData.locationUrl}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="lab-in check-box">
                            <label htmlFor="">Facility</label>
                            <div>
                                <div className="status-check">
                                    <input type="checkbox" name="wifi" id="wifi" checked={formData.wifi} onChange={handleChange}/>
                                    <label htmlFor="wifi">WiFi</label>
                                </div>
                                
                                <div className="status-check">
                                    <input type="checkbox" name="sockets" id="sockets" checked={formData.sockets} onChange={handleChange}/>
                                    <label htmlFor="sockets">Sockets</label>
                                </div>
                                
                                <div className="status-check">
                                    <input type="checkbox" name="calls" id="calls" checked={formData.calls} onChange={handleChange}/>
                                    <label htmlFor="calls">Video or voice calls</label>
                                </div>
                                
                                <div className="status-check">
                                    <input type="checkbox" name="toilet" id="toilet" checked={formData.toilet} onChange={handleChange}/>
                                    <label htmlFor="toilet">Toilet</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-btns">
                            <button type="submit">Create</button>
                            <button>Go Back</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateRestaurant;