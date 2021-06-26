import React, { useEffect, useState } from "react";


const BASE_URL = "https://api.instantwebtools.net";
const APP_ID = "60d6a7206e9a79cabbee8587";
const PAGE_NUM = 1;


const Dashboard = () => {
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState([]);
    const [page, setPage] = useState(PAGE_NUM);

    useEffect(() => {
        setLoading(true)
        fetch(`${BASE_URL}/v1/passenger?page=${page}&size=20`)
            .then(resp => resp.json())
            .then(json => setState([...state, ...json.data]))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }, [page]);

    const scrollToEnd = function () {
        setPage(page + 1);
    };
    window.onscroll = function () {
        if (
            window.innerHeight + document.documentElement.scrollTop ==
            document.documentElement.offsetHeight
        ) {
            scrollToEnd();
        }
    };
    return (
        <div className="App">
            <div className="container">
                {loading && 'Loading...'}
                {state.length > 0 && state.map((element, index) =>
                    <div key={index} className="item">
                        <h4>Name {element.name} </h4>
                        <h4>Trip {element.trips} </h4>
                        <h4>Country {element.airline.country} </h4>
                        <h4>Website :<a href={element.airline.website}>Visit Us</a></h4>
                        <img src={element.airline.logo} />
                    </div>
                )
                }</div>
        </div>
    );
}

export default Dashboard
