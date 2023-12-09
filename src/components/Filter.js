import React from "react";

function Filter({ changeFilter }) {

    function handleFilter(event) {
        changeFilter(event.target.value)
    }

    return (
        <>
            <h2>Filter</h2>
            <input type="text" onChange={handleFilter} placeholder="type name here to search..." />
        </>
    )
}

export default Filter;