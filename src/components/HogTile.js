import React from "react";

function HogTile({ name, image }) {

    // Function for when the hogTile is clicked
    function handleHogClick() {
        console.log("Hog Clicked!")
    }

    return (
        <div className="ui card" onClick={handleHogClick}>
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <div className="content">
                <p className="header">{name}</p>
            </div>
        </div>
    )
}

export default HogTile;