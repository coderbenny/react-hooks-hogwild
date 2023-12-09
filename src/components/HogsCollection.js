import React, { useState } from "react";
import HogTile from "./HogTile";
import Filter from "./Filter";

function HogCollection({ hogData }) {

    // State for all hogs
    const [allHogs, setAllHogs] = useState(hogData)

    // State for FilterBy
    const [filterBy, setFilterBy] = useState("")
    console.log(filterBy)

    // Function for handling filter change
    function handleFilterChange(filterText) {
        if (filterText !== "") {
            setFilterBy(filterText)
            const filteredHogs = allHogs.filter((hog) => hog.name.toLowerCase().startsWith(filterText.toLowerCase()))
            setAllHogs(filteredHogs)
        } else {
            setAllHogs(hogData)
        }
    }

    // Function for Filtering



    return (
        <>
            <h1>Hog Collection</h1>
            <Filter changeFilter={handleFilterChange} />
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