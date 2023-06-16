import React from "react";
function Square({number,image}) {
    return (
        <div className={number === 0 ? "square" : "square black-square"}>
            {image && <div className="piece" style={{backgroundImage:`url(${image})`}}></div>}
            
        </div>
    );
}
export default Square;
