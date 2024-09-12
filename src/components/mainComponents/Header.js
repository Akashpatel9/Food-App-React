import { useRef } from 'react'
import HeaderCards from '../HeaderCards'
import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";
import HeaderShimmerUi from '../shimmerUi/HeaderShimmerUi';
import { Link } from 'react-router-dom';


function Header({ data }) {

    const scrollButton = useRef();
    const scroll = (scrollOffset) => {
        scrollButton.current.scrollLeft += scrollOffset;
    };

    return data?(
        <div className="">
            <div className="flex w-full justify-between items-center">
                <h1 className="font-extrabold text-2xl">{(data?.header?.title)}</h1>
                <div className="flex items-center text-zinc-500 justify-between gap-2">
                    <CiSquareChevLeft onClick={() => scroll(-200)} className=" text-5xl cursor-pointer" />
                    <CiSquareChevRight onClick={() => scroll(200)} className="text-5xl cursor-pointer" />
                </div>
            </div>
            <div ref={scrollButton} className="relative w-full h-44 mt-2 overflow-auto scrollbar-hide">
                <div className="flex gap-10 h-full absolute ">
                    {data?.imageGridCards?.info?.map((item) => {
                        const str = item?.action?.link;
                        const idx = str.search('collections');
                        const link = str.substr(idx);
                        return <HeaderCards key={item?.id} data={item} />
                        // return (<Link key={item?.id} to={`/resturents-explore?link=${link}`} > <HeaderCards data={item} /> </Link>)
                    })}
                </div>
            </div>
        </div>
    ):<HeaderShimmerUi/>
}

export default Header