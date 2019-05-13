import React, { Component, Fragment } from "react";

class SelectBox extends Component {

	state = {
		rockets: [],
		loading: false
	};

	componentDidMount() {
		this.setState({ loading: true });

		fetch("https://api.spacexdata.com/v3/rockets")
			.then(response => {
				if (!response.ok) {
					throw new Error("Failed to fetch");
				}
				return response.json();
			})
			.then(data => {
				//console.log("data", data);
				this.setState({
					rockets: data,
					loading: false
				});
			})
			.catch(error => console.log("error : ", error));
	}

	handleChange = e => {
		const { onSelectBoxChange } = this.props;

		if(onSelectBoxChange){
			onSelectBoxChange(e.target.value);
		}
	}

	render() {
		const { rockets, loading } = this.state;

		return (
			<Fragment>
				{loading ? (
					<div>Loading..</div>
				) : (
					<select 
						name="" 
						id=""
						onChange={e => this.handleChange(e)}
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
}

export default SelectBox;
