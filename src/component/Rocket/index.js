import React, { Component, Fragment } from "react";
import SelectBox from "./SelectBox";
import RocketDetail from "./RocketDetail";
import Status from "./Status";


export class Rocket extends Component {
	state = {
		selectedRocket: "falcon1",
		status: "works",
		destroyed: false
	};

	handleChangeRocket = rocket_id => {
		this.setState({
			selectedRocket: rocket_id
		})
	}

	handleChangeStatus = () => {
		this.setState({
			status: "broken"
		})
	}

	handleDestruction = () => {
		this.setState({
			destroyed: true
		})
	}

	render() {
		const { selectedRocket, status, destroyed } = this.state;

		return (
			<div>
                <h1>SpaceX</h1>
                {
                    destroyed ? <div>Destructed..</div> :
                    <Fragment>
                        <SelectBox 
                            onSelectBoxChange={this.handleChangeRocket}
                        />
                        <RocketDetail 
                            selectedRocket={selectedRocket}
                        />
                        <Status
                            status={status}
                            onClick={this.handleChangeStatus}
                            onDestruct={this.handleDestruction}
                        />
                    </Fragment>
                }
			</div>
		);
	}
}

export default Rocket;
