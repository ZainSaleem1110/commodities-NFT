import React from 'react'
import Img1 from '../assets/images/house (1).png'
import Img2 from '../assets/images/house (2).jpeg'
import Img3 from '../assets/images/house (3).jpeg'

function TeamSection() {
    return (
        <div className="py-14 flex justify-center">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-col  lg:gap-x-20 gap-x-8">
            <div className="rounded-lg sm:sm:w-[300px] w-[250px] w-[250px]">
                <div className="sm:w-[300px] w-[250px] sm:h-[311px] h-[250px] rounded-lg bg-[#F5FBFC] text-[48px] flex justify-center items-center font-bold text-center">
                    <img src={Img1} className="w-[100%] h-[100%]" alt="" />
                </div>
                <h1 className="text-[24px] mt-3 font-bold">Genesis Commodity.NFT</h1>
                <p className="text-[18px] mt-2 pr-2">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <p className="text-[18px] mt-5 text-right"><span className="font-black">Mint Price:</span> 0.001 ETH</p>
                <p className="text-[18px] mt-1 text-right">1,800 / 3,500 minted </p>
                <button className="text-[16px] mt-5 w-[100%] font-medium h-[47px] bg-[#35B8BE] text-white rounded-lg flex items-center justify-center">Mint</button>
            </div>
            <div className="rounded-lg sm:w-[300px] w-[250px] sm:mt-0 mt-10">
                <div className="sm:w-[300px] w-[250px] sm:h-[311px] h-[250px] rounded-lg bg-[#F5FBFC] text-[48px] flex justify-center items-center font-bold text-center">
                    <img src={Img2} className="w-[100%] h-[100%]" alt="" />
                </div>
                <h1 className="text-[24px] mt-3 font-bold">Water.NFT</h1>
                <p className="text-[18px] mt-2 pr-2">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <p className="text-[18px] mt-5 text-right"><span className="font-black">Mint Price:</span> 0.001 ETH</p>
                <p className="text-[18px] mt-1 text-right">200 minted</p>
                <button className="text-[16px] mt-5 w-[100%] font-medium h-[47px] bg-[#35B8BE] text-white rounded-lg flex items-center justify-center">Mint</button>
            </div>
            <div className="rounded-lg sm:w-[300px] w-[250px] lg:mt-0 mt-10">
                <div className="sm:w-[300px] w-[250px] sm:h-[311px] h-[250px] rounded-lg bg-[#F5FBFC] text-[48px] flex justify-center items-center font-bold text-center">
                    <img src={Img3} className="w-[100%] h-[100%]" alt="" />
                </div>
                <h1 className="text-[24px] mt-3 font-bold">Toilet Paper.NFT</h1>
                <p className="text-[18px] mt-2 pr-2">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <p className="text-[18px] mt-5 text-right"><span className="font-black">Mint Price:</span> 0.001 ETH</p>
                <p className="text-[18px] mt-1 text-right">2,2403 minted</p>
                <button className="text-[16px] mt-5 w-[100%] font-medium h-[47px] bg-[#35B8BE] text-white rounded-lg flex items-center justify-center">Mint</button>
            </div>
        </div>
        </div>
    )
}

export default TeamSection
