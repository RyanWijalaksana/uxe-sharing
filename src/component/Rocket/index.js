import React, { Component, Fragment, useState } from "react";
import SelectBox from "./SelectBox";
import RocketDetail from "./RocketDetail";
import Status from "./Status";

import ThemeContext from "../context/theme-context";


const Rocket = () => {

	// state = {
	// 	selectedRocket: "falcon1",
	// 	status: "works",
	// 	destroyed: false
    // };
    
    const [selectedRocket, setSelectedRocket] = useState("falcon1");
    const [status, setStatus] = useState("works");
    const [destroyed, setDestroyed] = useState(false);


	const handleChangeRocket = rocket_id => {
        setSelectedRocket(rocket_id);
	}

	const handleChangeStatus = () => {
        setStatus("broken");
	}

	const handleDestruction = () => {
		setDestroyed(true);
	}

    return (
        <ThemeContext.Provider value={"light"}>
            <div>
                <h1>SpaceX</h1>
                {
                    destroyed ? <div>Destructed..</div> :
                    <Fragment>
                        <SelectBox 
                            onSelectBoxChange={handleChangeRocket}
                        />
                        <RocketDetail 
                            selectedRocket={selectedRocket}
                        />
                        <Status
                            status={status}
                            onClick={handleChangeStatus}
                            onDestruct={handleDestruction}
                        />
                    </Fragment>
                }
            </div>
        </ThemeContext.Provider>
    );
	
}

export default Rocket;
