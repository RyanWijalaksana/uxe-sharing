import { useState, useEffect } from "react";

const useHttp = (url, dependencies) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {

        setLoading(true);
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch");
            }
            return response.json();
        })
        .then(data => {
            //console.log("data", data);
            setData(data);
            setLoading(false)
        })
        .catch(error => console.log("error : ", error));

    }, dependencies);

    return [loading, data];
}

export default useHttp;
