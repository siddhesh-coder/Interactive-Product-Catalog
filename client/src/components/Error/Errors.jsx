import React, { lazy } from "react";
import { useRouteError } from "react-router-dom";
import { ERROR_IMG } from "../../utils/constants/constants";
import './Errors.css';

// eslint-disable-next-line react/display-name
const Errors = () => {
    const err = useRouteError();
    return (
        <div className="error-img">
            <img src={ERROR_IMG} alt="error message" />
            <h1>{err.status}</h1>
            <h2>{err.statusText}</h2>
        </div>
    )
}
export default Errors;