import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

function ResturentsExplore({}) {

    const [searchParams] = useSearchParams();
    const link = searchParams.get('link');
    console.log("link" ,searchParams.getAll);

    const [data, setData] = useState([]);

    // async function apiHandler() {
    //     await axios.get(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.18880&lng=72.82930&collection=${id}&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null`)
    //         .then((data) => {
    //             console.log(data);
    //         }).catch((err) => {
    //             console.log(err);
    //         })
    // }

    // useEffect(() => {
    //     apiHandler();
    // }, [])




    return (
        <div>ResturentsExplore</div>
    )
}

export default ResturentsExplore