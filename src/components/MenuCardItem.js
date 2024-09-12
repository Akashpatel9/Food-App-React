import React from 'react'
import { MdStar } from "react-icons/md";


function MenuCardItem({ data }) {
    const ImageBaseUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
    return (
        <div className="border-b-2 w-full py-5 border-zinc-100 flex items-center justify-between">
            <div className="w-3/4">
                <div className={`w-3 h-3 border-2 ${data?.card?.info?.isVeg ? "bg-green-600 border-green-200" : "bg-red-600 border-red-200"} rounded`}></div>
                <div className="font-bold text-zinc-700 text-xl">{data?.card?.info?.name}</div>
                <div className="font-bold">₹{data?.card?.info?.price / 100 || data?.card?.info?.defaultPrice / 100}</div>
                {(data?.card?.info?.ratings?.aggregatedRating?.rating && data?.card?.info?.ratings?.aggregatedRating?.ratingCountV2) && (<div className="flex items-center gap-1 font-semibold text-sm text-zinc-600"><span className="font-bold text-green-700 flex items-center"><MdStar /> {data?.card?.info?.ratings?.aggregatedRating?.rating}</span>
                    ({data?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
                </div>)
                }
                <div>{data?.card?.info?.description}</div>
            </div>
            <div className="h-fit w-40 flex flex-col items-center justify-center">
                {
                    data?.card?.info?.imageId ?
                        <div className="h-fit w-40 relative flex flex-col items-center justify-center">
                            <div><img className="rounded-xl h-40 w-40 bg-cover" src={ImageBaseUrl + data?.card?.info?.imageId} /></div>
                            <button className="w-4/5 absolute shadow-[0_0px_1px_1px_rgba(0,0,0,0.3)]  rounded-md -bottom-5 z-30 flex items-center justify-center h-10 bg-white text-xl font-extrabold text-green-600">ADD</button>
                        </div>
                        : <div className="font-semibold w-20 shadow-[0_0px_2px_1px_rgba(0,0,0,0.3)] p-1 text-xs rounded-md">item avliable next day</div>
                }
            </div>
        </div>
    )
}

export default MenuCardItem