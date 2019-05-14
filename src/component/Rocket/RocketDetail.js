import React, { Component, PureComponent, useState, useEffect } from "react";
import useHttp from "./http";

const RocketDetail = ({ selectedRocket }) => {
    const [loading, data] = useHttp(
        `https://api.spacexdata.com/v3/rockets/${selectedRocket}`,
        [selectedRocket]
    );

    useEffect(() => {
        return () => {
            console.log("Component Will Unmount");
        };
    }, []);

    console.log("data", data);

    return (
        <div style={{ width: "500px", margin: "50px auto" }}>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h3>{data.rocket_name}</h3>
                    <p>{data.description}</p>
                </div>
            )}
        </div>
    );
};

export default React.memo(RocketDetail);
