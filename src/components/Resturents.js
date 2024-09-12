import React from 'react'
import ResturentsCards from './ResturentsCards.js';
import ResturentsShimmerUi from './shimmerUi/ResturentsShimmerUi.js';
import { Link } from 'react-router-dom';

function Resturents({ data, data2 }) {

    return (data2 && data) ? (
        <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-2xl">{(data?.title)}</h1>
            <div className="w-full grid grid-cols-4 gap-10">
                {
                    data2?.gridElements?.infoWithStyle?.restaurants?.map((item) => {
                        return ( <Link key={item?.info?.id} to={`/restorentMenu/${item?.info?.id}`} > <ResturentsCards data={item} /> </Link>)
                    })
                }
            </div>
        </div>
    ) : <ResturentsShimmerUi />
}

export default Resturents