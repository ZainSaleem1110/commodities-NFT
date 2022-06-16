import React from 'react'

function Banner() {
    return (
        <div className="w-[100%] sm:h-[268px] md:py-0 py-10 bg-[#F5FBFC] flex flex-col justify-center items-center relative overflow-hidden">
            <div className="flex">
            <h1 className="sm:text-[48px] text-[24px] font-bold text-center leading-tight">It’s time to mint your<br/> <span className="text-[#35B8BE]"> Commodity.NFT</span></h1>
            <div className="w-[60px] h-[60px] rounded-full ml-4 mt-[-6%] md:flex hidden" style={{border:'5px solid #35B8BE'}}></div>
            </div>
            <p className="sm:text-[24px] text-[16px] lg:px-0 text-center px-10 font-medium mt-5">Choose the commodity you’d like to mint. For uncertain times ahead</p>
            <div className="w-[150px] h-[150px] absolute top-[-30%] left-10 rounded-full lg:flex hidden" style={{border:'40px solid #35B8BE'}}></div>
            <div className="w-[150px] h-[150px] absolute bottom-0 right-[-6%] rounded-full lg:flex hidden" style={{border:'30px solid #35B8BE'}}></div>
        </div>
    )
}

export default Banner
