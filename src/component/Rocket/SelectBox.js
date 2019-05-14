import React, { Component, Fragment, useState, useEffect } from "react";
import useHttp from "./http";

const SelectBox = props => {

    const [loading, data] = useHttp(
        "https://api.spacexdata.com/v3/rockets",
        []
    );

    const handleChange = e => {
        const { onSelectBoxChange } = props;

        if (onSelectBoxChange) {
            onSelectBoxChange(e.target.value);
        }
    };

    //console.log("data", data);

    return (
        <Fragment>
            {loading ? (
                <div>Loading..</div>
            ) : (
                <select name="" id="" onChange={e => handleChange(e)}>
                    {data &&
                        data.length > 0 &&
                        data.map((rocket, index) => (
                            <option key={rocket.id} value={rocket.rocket_id}>
                                {rocket.rocket_name}
                            </option>
                        ))}
                </select>
            )}
        </Fragment>
    );
};

export default SelectBox;
