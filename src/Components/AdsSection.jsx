import React from 'react'
import Dots from '../assets/images/dots.png'

function AdsSection() {
    return (
        <div className="md:w-[85%] w-[100%] pt-20 md:pb-0 pb-20 bg-[#F5FBFC] text-center flex flex-col justify-center rounded-lg">
            <h1 className="sm:text-[48px] text-[28px] font-bold text-center leading-tight">We’ve got more <span className="text-[#35B8BE]"> Commodity.NFT’s </span><br/> coming soon!</h1>
            <div className="justify-end mt-2 md:flex hidden">
                <img src={Dots} alt="" />
                <img className="ml-[7px]" src={Dots} alt="" />
            </div>
        </div>
    )
}

export default AdsSection
