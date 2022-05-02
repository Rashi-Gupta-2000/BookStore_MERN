// import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
function Filter() {
    const dispatch = useDispatch();
    const { selectedCategory } = useSelector((state) => state);
    function handleCategoryChange(event) {
        dispatch({ type: "selectedCategory", value: event.target.value })
        console.log("in filter selectedCategory is:", selectedCategory)
    }

    return (
        <div className="text-light">
            <div className="">
                <div>Filter by Category:</div>
                <div>
                    <select
                        name="category-list"
                        id="category-list"
                        onChange={handleCategoryChange}
                    >
                        <option value="">All</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Romance">Romance</option>
                        <option value="Horror">Horror</option>
                        <option value="Comedy">Comedy</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Filter 