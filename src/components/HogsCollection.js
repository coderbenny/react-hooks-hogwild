import React, { useState } from "react";
import HogTile from "./HogTile";

function HogCollection({ hogData }) {

    // State for all hogs
    const [allHogs, setAllHogs] = useState(hogData)


    return (
        <>
            <h1>Hog Collection</h1>
            <div className="ui cards container">
                {allHogs.map((data, index) => {
                    return (
                        <HogTile key={index} hog={data} />
                    )
                })}
            </div>
        </>
    )
}

export default HogCollection;