import React, {
    Component,
    PureComponent,
    useState,
    useEffect,
    useContext
} from "react";
import ThemeContext from "../context/theme-context";
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

    const context = useContext(ThemeContext);

    return (
        <div style={{ width: "500px", margin: "50px auto" }}>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h3>{data.rocket_name}</h3>
                    <p>{data.description}</p>
                    <p>Theme: {context}</p>
                </div>
            )}
        </div>
    );
};

export default React.memo(RocketDetail);
