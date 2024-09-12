import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import MenuCard from '../MenuCard';

function ResturentMenu() {

  const [data, setData] = useState([]);
  const params = useParams()
  const [menuData, setMenuData] = useState([]);
  const [toggelButton, setToggelButton] = useState("VEG");

  // api call
  async function getResturentData() {
    await axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.18880&lng=72.82930&restaurantId=${params?.id}&catalog_qa=undefined&submitAction=ENTER`)
      .then((data) => {
        setData(data?.data?.data?.cards);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  useEffect(() => {
    setMenuData(data[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  }, [data])

  useEffect(() => {
    getResturentData();
  }, [])
  console.log(data);
  
  return (
    <div className="flex flex-col gap-8 px-96">
      <div className="text-4xl font-extrabold">{data[0]?.card?.card?.text}</div>
      {/* <div className="w-full bg-zinc-100 shadow-2xl text-2xl font-bold rounded-xl p-5">
        <div>
          4.3 (3.4K+ ratings) ₹300 for two
        </div>
        <div>Pizza</div>
      </div> */}
      <div className="w-full text-center font-semibold text-xl uppercase">
        Menu
      </div>
      <div className="flex items-center justify-center overflow-hidden bg-zinc-200 rounded-xl px-4">
        <input className=" outline-none bg-zinc-200 w-full h-10" type="text" placeholder="Search for dish" />
        <CiSearch />
      </div>
      <div>
        <div className="flex gap-4 font-semibold items-center">
          <input
            className="h-3.5 w-8 appearance-none rounded-[0.4375rem] before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-red-400 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer dark:bg-green-600 dark:after:bg-green-400 dark:checked:bg-red-600 dark:checked:after:bg-red-400"
            type="checkbox"
            onChange={() => setToggelButton((val) => val === "VEG" ? "NONVEG" : "VEG")}
          />
          {toggelButton}
        </div>

        <div className="border-[1px] border-zinc-300 mt-3 mb-7"></div>
        <div className="flex flex-col gap-4 mt-4">
          {
            menuData?.map((items, idx) => {
              if (idx > 0 && idx < menuData.length - 2 && items) return (<MenuCard key={idx} data={items} type={toggelButton} idx={idx} />)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ResturentMenu