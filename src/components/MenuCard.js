import React, { useState, useEffect } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import MenuCardItem from './MenuCardItem.js';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

function MenuCard({ data, type, idx }) {

    const [dishData, setDishData] = useState([]);

    const [view, setView] = useState(true);

    


    function dataHandler() {
        const Data = data?.card?.card?.itemCards?.filter((item) => {
            return (item?.card?.info?.itemAttribute?.vegClassifier === type);
        })
        setDishData(Data);
    }
    useEffect(() => {
        dataHandler()
        
    }, [type])
    
    return (
        <div className={`${idx!=1&&"border-t-[20px] pt-5"} border-zinc-200`}>
            <div onClick={()=>setView((pre)=>!pre)} className="flex items-center font-bold justify-between">
                <div>{data?.card?.card?.title}</div>
                {
                    !view ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />
                }
            </div>
            <div className={`${!view?"hidden":""}`}>
                {
                    dishData?.map((items, idx) => {
                        return (<MenuCardItem key={idx} data={items} view={view} />);
                    })
                }
            </div>
        </div>
    )
}

export default React.memo(MenuCard)