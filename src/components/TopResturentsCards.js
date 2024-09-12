import React from 'react'
import { FcRating } from "react-icons/fc";
import { LuDot } from "react-icons/lu";


function TopResturentsCards({ data }) {

    const ImageBaseUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

    return (
        <div className="h-full hover:scale-95 hover:transition-all">
            <div className="h-40 w-64 relative rounded-xl overflow-hidden flex items-center justify-center">
                <img className="w-fit h-fit" src={ImageBaseUrl + data?.info?.cloudinaryImageId} alt="" />
                <div className="absolute w-full h-full bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="flex absolute text-white font-extrabold p-2 w-full text-xl bottom-0">{data?.info?.aggregatedDiscountInfoV3?.header} {data?.info?.aggregatedDiscountInfoV3?.subHeader}</div>

            </div>
            <div className="px-2">
                <div className=" font-bold ">{(data?.info?.name).length > 28 ? (data?.info?.name).substr(0, 28) + "..." : (data?.info?.name)}</div>
                <div className="flex items-center gap-1 font-semibold"> <FcRating /> {data?.info?.avgRating} <LuDot /> {data?.info?.sla?.slaString} </div>

                <div className="items-center gap-1 flex flex-wrap leading-4 text-zinc-700 font-semibold text-sm">
                    {
                        data?.info?.cuisines?.map((item, idx) => {
                            if (idx < 6) {
                                return <h1 key={idx}>{item},</h1>;
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TopResturentsCards