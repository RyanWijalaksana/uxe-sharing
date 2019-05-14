import React, { Component, Fragment, useState, useEffect } from "react";

const SelectBox = props => {
    
    const [rockets, setRockets] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {

        setLoading(true);

        fetch("https://api.spacexdata.com/v3/rockets")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch");
            }
            return response.json();
        })
        .then(data => {
            //console.log("data", data);
            setRockets(data);
            setLoading(false)
        })
        .catch(error => console.log("error : ", error));

    },[]);

	const handleChange = e => {
		const { onSelectBoxChange } = props;

		if(onSelectBoxChange){
			onSelectBoxChange(e.target.value);
		}
	}

    return (
        <Fragment>
            {loading ? (
                <div>Loading..</div>
            ) : (
                <select 
                    name="" 
                    id=""
                    onChange={e => handleChange(e)}
                >
                {rockets.map((rocket, index) => (
                    <option key={rocket.id} value={rocket.rocket_id}>
                        {rocket.rocket_name}
                    </option>
                ))}
                </select>
            )}
        </Fragment>
    );
	
}

export default SelectBox;
