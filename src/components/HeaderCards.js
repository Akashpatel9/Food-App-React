import React from 'react'

function HeaderCards({data}) {
    const ImageBaseUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";    
    return (
        <div className="h-full hover:scale-95 hover:transition-all w-40">
            <img className="h-full w-full" src={ImageBaseUrl+data.imageId} alt="" />
        </div>
    )||(<div className="w-72 rounded-xl h-8 bg-zinc-200"></div>)
}

export default HeaderCards