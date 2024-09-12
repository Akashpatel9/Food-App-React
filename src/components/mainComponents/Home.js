import { useState, useEffect } from 'react';
import axios from 'axios'
import Header from './Header.js'
import TopRestarunts from '../TopRestarunts.js';
import Resturents from '../Resturents.js';


function Home() {

  const [apiData, setApiData] = useState([]);

  async function callApi() {
    await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.18880&lng=72.82930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      .then((data) => setApiData(data?.data?.data?.cards))
      .catch((err) => {
        console.log(err);
      })
  }
  // api call
  useEffect(() => {
    callApi()
  }, [])

  return (
    <div className="flex flex-col gap-10">
      <Header data={apiData[0]?.card?.card} />
      <div className="w-full border-t-2 border-zinc-100 pt-2">
        <TopRestarunts data={apiData[1]?.card?.card} />
      </div>
      <div className="w-full border-t-2 border-zinc-100 pt-2">
        <Resturents data={apiData[2]?.card?.card} data2={apiData[4]?.card?.card} />
      </div>
    </div>
  )
}

export default Home