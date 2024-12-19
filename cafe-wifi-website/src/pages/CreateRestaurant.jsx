import React from "react";
import "./../styles/createRestaurant.css";

// COMPONENETS
import Navigation from "../components/Navigation";
import Form from "../components/Form";

const CreateRestaurant = () => {
    return (
        <div className="add-res">
            <Navigation />
            <div className="add-layer">
                <Form heading="Add Restaurant" submitType="Create" cafeData={null} typeForm={null} />
            </div>
        </div>
    )
}

export default CreateRestaurant;