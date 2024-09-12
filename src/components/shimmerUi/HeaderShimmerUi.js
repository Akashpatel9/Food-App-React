
function HeaderShimmerUi() {
    return (
        <div className="animate-pulse">
            <div className='bg-zinc-100 rounded-xl w-72 h-10'></div>
            <div className="relative h-44 mt-4 overflow-auto scrollbar-hide">
                <div className="flex gap-10 h-full absolute">
                    {/* cards */}
                    <div className="h-40 w-40 rounded-xl bg-zinc-100"></div>
                    <div className="h-40 w-40 rounded-xl bg-zinc-100"></div>
                    <div className="h-40 w-40 rounded-xl bg-zinc-100"></div>
                    <div className="h-40 w-40 rounded-xl bg-zinc-100"></div>
                    <div className="h-40 w-40 rounded-xl bg-zinc-100"></div>
                    <div className="h-40 w-40 rounded-xl bg-zinc-100"></div>
                    <div className="h-40 w-40 rounded-xl bg-zinc-100"></div>
                    <div className="h-40 w-40 rounded-xl bg-zinc-100"></div>
                </div>
            </div>
        </div>
    )
}

export default HeaderShimmerUi