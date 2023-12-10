import React, { useState } from "react";

function Filter({ changeFilter, handleGreaseFilterChange }) {

    const [selectedValue, setSelectedValue] = useState("All")
    // console.log(selectedValue)

    function handleFilter(event) {
        changeFilter(event.target.value)
    }

    function handleGreaseFilter(event) {
        const optionValue = event.target.value
        setSelectedValue(optionValue)
        handleGreaseFilterChange(optionValue)
    }

    return (
        <>
            <h2>Filter</h2>
            <input type="text" onChange={handleFilter} placeholder="type name here to search..." />
            <select onChange={handleGreaseFilter} value={selectedValue}>
                <option value="All">All</option>
                <option value="true">Greased</option>
                <option value="false">Not Greased</option>
            </select >
        </>
    )
}

export default Filter;