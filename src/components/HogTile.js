import React, { useState } from "react";

function HogTile({ hog }) {

    // State for showing hogDetails
    const [displayHogInfo, setDisplayHogInfo] = useState(false)


    // Function for when the hogTile is clicked
    function handleHogClick() {
        setDisplayHogInfo(!displayHogInfo)
    }

    return (
        <div className="ui card" onClick={handleHogClick}>
            <div className="image">
                <img src={hog.image} alt={hog.name} />
            </div>
            <div className="content">
                <p className="header">{hog.name}</p>
                <div className="hog-details" style={{ display: displayHogInfo ? "block" : "none" }}>
                    <p><strong>Specialty:</strong> {hog.specialty}</p>
                    <p> <strong>Greased:</strong> {hog.greased ? "Yes" : "No"}</p>
                    <p><strong>Weight:</strong> {hog.weight}</p>
                </div>
            </div>
        </div >
    )
}

export default HogTile;