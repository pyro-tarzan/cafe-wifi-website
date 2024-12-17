import React from "react";
import "./../styles/errornotfound.css";
 
const ErrorNotFound = () => {
    return (
        <div className="error-found">
            <div className="error-mesg">
                <h1>Something went wrong...</h1>
                <p>Please check the connection or try again later.</p>
            </div>
        </div>
    )
}

export default ErrorNotFound;