import React from "react";
import "./../styles/delete.css";

const Delete = ({onDelete, onCancel}) => {
    return (
        <div className="delete-confirm">
            <div className="delete-cont">
                <h1>Are you sure want to delete this entity?</h1>
                <div className="del-btns">
                    <button onClick={onDelete} className="delete-btn-con">Delete</button>
                    <button onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Delete;