import React, { Component, PureComponent, useState, useEffect } from "react";

const RocketDetail = ({ selectedRocket }) => {
    const [rocketDetail, setRocketDetail] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("Did update");

        const fetchData = () => {
            setLoading(true);

            fetch(`https://api.spacexdata.com/v3/rockets/${selectedRocket}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Failed to fetch");
                    }
                    return response.json();
                })
                .then(data => {
                    setRocketDetail(data);
                    setLoading(false);
                })
                .catch(error => console.log("error : ", error));
        };

        fetchData();
    }, [selectedRocket]);

    useEffect(() => {
        return () => {
            console.log("Component Will Unmount");
        };
    }, []);

    console.log("rendering");

    return (
        <div style={{ width: "500px", margin: "50px auto" }}>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h3>{rocketDetail.rocket_name}</h3>
                    <p>{rocketDetail.description}</p>
                </div>
            )}
        </div>
    );
};

export default React.memo(RocketDetail);
