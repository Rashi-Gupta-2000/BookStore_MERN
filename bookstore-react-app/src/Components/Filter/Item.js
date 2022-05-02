import React from "react";
// import "./itemStyles.css";

// React Component to display individual item
const Item = ({ title, category }) => (
    <div className="item-container">
        <div>
            <span className="item-label">Title:</span>
            {title}
        </div>
        <div>
            <span className="item-label">Category:</span>
            {category}
        </div>
    </div>
);

export default Item;