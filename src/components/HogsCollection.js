import React from "react";
import HogTile from "./HogTile";

function HogCollection({ hogData }) {

    return (
        <>
            <h1>Hog Collection</h1>
            <div className="ui cards container">
                {hogData.map((data, index) => {
                    return (
                        <HogTile key={index} name={data.name} image={data.image} />
                    )
                })}
            </div>
        </>
    )
}

export default HogCollection;