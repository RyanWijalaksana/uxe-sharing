import React, { Component, PureComponent } from "react";

class RocketDetail extends PureComponent {
    state = {
        rocketDetail: {},
        loading: false
    };

    fetchData = () => {
        const { selectedRocket } = this.props;

        this.setState({ loading: true });

        fetch(`https://api.spacexdata.com/v3/rockets/${selectedRocket}`)
        .then(response => {
            if (!response.ok) {
            throw new Error("Failed to fetch");
            }
            return response.json();
        })
        .then(data => {
            this.setState({
                rocketDetail: data,
                loading: false
            });
        })
        .catch(error => console.log("error : ", error));
    }

    componentDidMount() {
        console.log("Did Mount");

        this.fetchData();
    }

    /*
    shouldComponentUpdate(nextProps, nextState){

        console.log("Should Update this state", this.state);
        console.log("Should Update next state", nextState);

        return ( //only update when this three is changed
            nextProps.selectedRocket !== this.props.selectedRocket ||
            nextState.loading !== this.state.loading ||
            nextState.rocketDetail !== this.state.rocketDetail
        );
    }
    */

    componentDidUpdate(prevProps, prevState) {

        console.log("Did Update");

        if(prevProps.selectedRocket !== this.props.selectedRocket){
            this.fetchData();
        }
    }

    componentWillUnmount(){
        console.log("Will Unmount");
    }

    render(){

        console.log("render");

        const { rocketDetail, loading } = this.state;

        return (
            <div style={{width:"500px",margin:"50px auto"}}>
            {
                loading ? <div>Loading...</div> :
                <div>
                    <h3>{ rocketDetail.rocket_name }</h3>
                    <p>{ rocketDetail.description }</p>
                </div>
            }
            </div>
        )
    }
}

export default RocketDetail;
