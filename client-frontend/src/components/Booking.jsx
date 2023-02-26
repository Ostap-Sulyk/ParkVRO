import React from "react";

const Booking = ({ reservation }) => {
    return (
        <div style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
            margin: "20px auto",
        }}>
            <h2>Reservation #{reservation.id}</h2>
            <p><strong>Customer:</strong> {reservation.customer.firstName} {reservation.customer.lastName}</p>
            <p><strong>Email:</strong> {reservation.customer.email}</p>
            <p><strong>Parking Spot Address:</strong> {reservation.parkingSpot.address}</p>
            <p><strong>Status:</strong> {reservation.parkingSpot.available ? "Available" : "Booked"}</p>
            <p><strong>Reservation Date:</strong> {reservation.date}</p>

        </div>
    );
};

export default Booking;
