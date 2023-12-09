import React from "react";

function HogTile({ name, image }) {
    return (
        <div className="ui card">
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