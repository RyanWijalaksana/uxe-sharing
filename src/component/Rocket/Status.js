import React from 'react';

const Status = ({ status, onClick, onDestruct }) => {

    const styling = {
        background: status === "works" ? "green" : "red",
        color: "white",
        marginRight: "8px"
    }

    return(
        <p>
            Status : &nbsp;
            <button onClick={() => onClick()} style={styling}>{ status }</button>
            {
                status === "broken" &&
                <button onClick={() => onDestruct()}>Destroy</button>
            }
        </p>
    )
}

export default Status;
