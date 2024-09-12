import { useRef } from 'react'
import TopResturentsCards from './TopResturentsCards';
import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";
import TopResturentsShimmerUi from './shimmerUi/TopResturentsShimmerUi';
import { Link } from 'react-router-dom';


function TopRestarunts({ data }) {

    const scrollButton = useRef();
    const scroll = (scrollOffset) => {
        scrollButton.current.scrollLeft += scrollOffset;
    };


    return data ? (
        <div className="">
            <div className="flex w-full justify-between items-center">
                <h1 className="font-extrabold text-2xl">{data?.header?.title}</h1>
                <div className="flex items-center text-zinc-500 justify-between gap-2">
                    <CiSquareChevLeft onClick={() => scroll(-200)} className=" text-5xl cursor-pointer" />
                    <CiSquareChevRight onClick={() => scroll(200)} className="text-5xl cursor-pointer" />
                </div>
            </div>
            <div ref={scrollButton} className="relative w-full h-72 overflow-auto scrollbar-hide">
                <div className="flex gap-10 h-fit absolute">
                    {
                        (data?.gridElements?.infoWithStyle?.restaurants?.map((item) => {
                            return (<Link key={item?.info?.id} to={`/restorentMenu/${item?.info?.id}`}> <TopResturentsCards data={item} /> </Link>)
                        }))
                    }
                </div>
            </div>
        </div>
    ) : <TopResturentsShimmerUi />
}

export default TopRestarunts