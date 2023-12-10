import React, { useState } from "react";
import HogTile from "./HogTile";
import Filter from "./Filter";

function HogCollection({ hogData }) {

    // State for all hogs
    const [allHogs, setAllHogs] = useState(hogData)

    // State for FilterBy
    const [filterBy, setFilterBy] = useState("")
    // console.log(filterBy)

    // Function for handling filter By Name change
    function handleFilterChange(filterText) {
        if (filterText !== "") {
            setFilterBy(filterText)
            const filteredHogs = allHogs.filter((hog) => hog.name.toLowerCase().startsWith(filterText.toLowerCase()))
            setAllHogs(filteredHogs)
        } else {
            setAllHogs(hogData)
        }
    }

    // Function for handling grease filter change
    function greaseFilterChange(optionValue) {
        if (optionValue === "All") {
            setAllHogs(hogData)
        } else {
            const isGreased = optionValue === "true";
            const afterFilter = allHogs.filter((hog) => hog.greased === isGreased)
            setAllHogs(afterFilter)
        }
    }

    return (
        <>
            <h1>Hog Collection</h1>
            <Filter handleGreaseFilterChange={greaseFilterChange} changeFilter={handleFilterChange} />
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