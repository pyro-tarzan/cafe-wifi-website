import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./../styles/editpage.css"

import Navigation from "../components/Navigation";
import Form from "../components/Form";

const EditPage = () => {

    const {id} = useParams();
    const location = useLocation();
    const cafe = location.state ? location.state : null;
    const [cafeData, setCafeData] = useState(cafe);

    useEffect(() => {
        if (cafe){
            setCafeData(cafe)
        }
    }, [cafe])

    return (
        <div className="edit-page">
            <Navigation />
            <div className="add-res">
                <div className="add-layer">
                    <Form heading="Edit Restaurant" submitType="Edit" cafeData={cafeData} typeForm="edit" cafeId={id} />
                </div>
            </div>
        </div>
    )
}

export default EditPage;