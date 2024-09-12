import React from 'react'

function TopResturentsShimmerUi() {
    return (
        <div className="animate-pulse">
            <div className='bg-zinc-100 rounded-xl w-96 h-10'></div>
            <div className="relative w-full min-h-72 overflow-auto scrollbar-hide">
                <div className="flex gap-10 h-full mt-5">

                    {/* cards */}
                    <div className="flex flex-col gap-2">
                        <div className="h-40 w-64 rounded-xl bg-zinc-100"></div>
                        <div className="px-2">
                            <div className="bg-zinc-100 h-8 w-full rounded-xl"></div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="h-40 w-64 rounded-xl bg-zinc-100"></div>
                        <div className="px-2">
                            <div className="bg-zinc-100 h-8 w-full rounded-xl"></div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="h-40 w-64 rounded-xl bg-zinc-100"></div>
                        <div className="px-2">
                            <div className="bg-zinc-100 h-8 w-full rounded-xl"></div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="h-40 w-64 rounded-xl bg-zinc-100"></div>
                        <div className="px-2">
                            <div className="bg-zinc-100 h-8 w-full rounded-xl"></div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="h-40 w-64 rounded-xl bg-zinc-100"></div>
                        <div className="px-2">
                            <div className="bg-zinc-100 h-8 w-full rounded-xl"></div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="h-40 w-64 rounded-xl bg-zinc-100"></div>
                        <div className="px-2">
                            <div className="bg-zinc-100 h-8 w-full rounded-xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopResturentsShimmerUi