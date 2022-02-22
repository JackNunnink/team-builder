import React from "react";

export default function Customer(props) {
    const { details } = props

    if (!details) {
        return <h3>Working on fetching your details...</h3>
    }

    return (
        <div className="customer-container">
            <h2>Thank you {props.details.fullName}, we will be getting back to you soon.</h2>
            <p>Phone Number: {props.details.phoneNumber}</p>
            <p>Email: {props.details.email}</p>
            <p>Website Type: {props.details.websiteType}</p>
        </div>
    )
}